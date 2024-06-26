import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '../makeStyles';

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
    name: string;
}

const useStyles = makeStyles()({
    card: {
        marginBottom: '20px',
        backgroundColor: '#424242', // Assurez-vous que la couleur de fond est compatible avec le thème sombre
        color: 'white'
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    textField: {
        marginRight: '10px',
        '& .MuiInputBase-root': {
            color: 'white'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
        '& .MuiInputLabel-root': {
            color: 'white'
        }
    },
    button: {
        backgroundColor: '#1E88E5',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1565C0'
        }
    }
});

const Weather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string>('Paris');
    const [loading, setLoading] = useState<boolean>(false);
    const { classes } = useStyles();

    const apiKey = 'your_openweather_api_key';
    const token = localStorage.getItem('token');

    const fetchWeatherData = async (city: string) => {
        if (!token) {
            alert('Please log in to view the weather.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching the weather data', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFetchWeather = () => {
        fetchWeatherData(city);
    };

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5">Weather</Typography>
                <Box className={classes.form}>
                    <TextField
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        variant="outlined"
                        className={classes.textField}
                    />
                    <Button variant="contained" className={classes.button} onClick={handleFetchWeather}>
                        Get Weather
                    </Button>
                </Box>
                {loading ? (
                    <Typography variant="body1">Loading...</Typography>
                ) : (
                    weatherData && (
                        <Box>
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
