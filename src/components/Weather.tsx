import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('Paris');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = '674b2b4b5bdae5978d231f22685c8338'; 

  const getWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh" 
      bgcolor="background.default" 
      color="text.primary"
      padding={2}
    >
      <Typography variant="h4" gutterBottom>
        Weather
      </Typography>
      <Box display="flex" mb={2}>
        <TextField 
          label="City" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          variant="outlined" 
        />
        <Button variant="contained" color="primary" onClick={getWeather} disabled={loading}>
          Get Weather
        </Button>
      </Box>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {weatherData && (
        <Box mt={2}>
          <Typography variant="h6">Weather in {weatherData.name}</Typography>
          <Typography>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</Typography>
          <Typography>Condition: {weatherData.weather[0].description}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Weather;
