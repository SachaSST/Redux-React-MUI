import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CardMedia, Grid, MenuItem, Select } from '@mui/material';
import axios from 'axios';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('Paris');
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [filteredForecast, setFilteredForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tempFilter, setTempFilter] = useState<string>('Coldest');
  const [conditionFilter, setConditionFilter] = useState<string>('All');

  const apiKey = '674b2b4b5bdae5978d231f22685c8338'; 

  const getWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const { coord } = response.data;
      setCurrentWeather(response.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`);
      const dailyForecast = forecastResponse.data.list.filter((reading: any) => reading.dt_txt.includes("12:00:00"));
      setForecast(dailyForecast);
      setFilteredForecast(dailyForecast);  
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [tempFilter, conditionFilter, forecast]);

  const applyFilters = () => {
    let filtered = [...forecast];
    if (tempFilter === 'Coldest') {
      filtered.sort((a, b) => a.main.temp - b.main.temp);
    } else if (tempFilter === 'Warmest') {
      filtered.sort((a, b) => b.main.temp - a.main.temp);
    }

    if (conditionFilter !== 'All') {
      filtered = filtered.filter(day => day.weather[0].main === conditionFilter);
    }

    setFilteredForecast(filtered);
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
      <Card sx={{ maxWidth: 800, width: '100%', p: 4, bgcolor: 'background.paper', color: 'text.primary' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sacha Weather
          </Typography>
          <Typography variant="h6" gutterBottom>
            Seeing the weather of the whole world with Sacha Weather!
          </Typography>
          <Box display="flex" mb={2} mt={2}>
            <TextField 
              label="Search Here" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              variant="outlined" 
              style={{ marginRight: '10px' }}
            />
            <Button variant="contained" color="primary" onClick={getWeather} disabled={loading}>
              Get Weather
            </Button>
          </Box>
          <Box display="flex" mb={2}>
            <Select
              value={tempFilter}
              onChange={(e) => setTempFilter(e.target.value as string)}
              variant="outlined"
              style={{ marginRight: '10px' }}
            >
              <MenuItem value="Coldest">Coldest</MenuItem>
              <MenuItem value="Warmest">Warmest</MenuItem>
            </Select>
            <Select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value as string)}
              variant="outlined"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Clear">Clear</MenuItem>
              <MenuItem value="Rain">Rain</MenuItem>
              <MenuItem value="Clouds">Clouds</MenuItem>
              <MenuItem value="Snow">Snow</MenuItem>
            </Select>
          </Box>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          {currentWeather && (
            <Box mt={2} display="flex" flexDirection="column" alignItems="center">
              <Card sx={{ maxWidth: 345, mb: 2, bgcolor: 'background.paper', color: 'text.primary' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt={currentWeather.weather[0].description}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {Math.round(currentWeather.main.temp - 273.15)}°C
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {currentWeather.weather[0].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Humidity: {currentWeather.main.humidity}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wind: {currentWeather.wind.speed} m/s
                  </Typography>
                </CardContent>
              </Card>
              <Typography variant="h6">Weather in {currentWeather.name}</Typography>
            </Box>
          )}
          {filteredForecast.length > 0 && (
            <Box mt={4} width="100%">
              <Typography variant="h5" gutterBottom>
                5-Day Forecast
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {filteredForecast.map((day, index) => (
                  <Grid item key={index}>
                    <Card sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
                      <CardContent>
                        <Typography variant="h6">{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</Typography>
                        <CardMedia
                          component="img"
                          height="80"
                          image={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                        />
                        <Typography>{Math.round(day.main.temp -  273.15)}°C</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {day.weather[0].description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Humidity: {day.main.humidity}%
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Weather;
