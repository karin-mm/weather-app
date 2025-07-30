import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, AppBar, Toolbar, Grid } from '@mui/material';
import WeatherForm from './components/weatherform/weatherform';
import WeatherCard from './components/weatherform/weathercard';
import HourlyForecast from './components/hourlyforcast';
import { fetchWeather, fetchHourlyForecast } from './services/weatherAPI';
import SearchBar from './components/weatherform/sreachbar';
import CloudIcon from '@mui/icons-material/Cloud';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const handleSearch = async (city) => {
    try {
      const weather = await fetchWeather(city);
      setWeatherData(weather);

      const forecast = await fetchHourlyForecast(city);
      setHourlyData(forecast);
    } catch (err) {
      console.error('City not found');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, px: 0 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" fontWeight={700} sx={{ display: 'flex', alignItems: 'center' }}>
            <CloudIcon sx={{ mr: 1 }} /> WeatherMe
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Tabs value={tabValue} onChange={(e, value) => setTabValue(value)} sx={{ color: 'white' }}>
              <Tab label="Today" />
              <Tab label="Tomorrow" />
              <Tab label="Monthly Forecast" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <SearchBar onSubmit={handleSearch} />
      </Box>

      {weatherData ? (
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <WeatherCard weatherData={weatherData} />
          </Grid>

          <Grid item xs={12}>
            <HourlyForecast hourlyData={hourlyData} />
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1" align="center">
          Search for a location to view weather details.
        </Typography>
      )}
    </Container>
  );
};

export default App;
