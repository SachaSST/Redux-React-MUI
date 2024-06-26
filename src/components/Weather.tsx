import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('Paris');
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = '674b2b4b5bdae5978d231f22685c8338'; 

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    fetchWeatherData(city);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Weather</Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <TextField
            label="City"
            value={city}
            onChange={handleCityChange}
            variant="outlined"
            style={{ marginRight: '10px' }}
          />
          <Button variant="contained" color="primary" onClick={handleFetchWeather}>
            Get Weather
          </Button>
        </Box>
        {loading ? (
          <Typography variant="body1" mt={2}>Loading...</Typography>
        ) : (
          weatherData && (
            <Box mt={2}>
              <Typography variant="h6">{weatherData.name}</Typography>
              <Typography variant="h6">Temperature: {weatherData.main.temp}°C</Typography>
              <Typography variant="h6">Description: {weatherData.weather[0].description}</Typography>
            </Box>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default Weather;
