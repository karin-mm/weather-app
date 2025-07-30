import { Card, CardContent, Typography, Box, Divider, Grid } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherCard = ({ weatherData }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        background: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
        color: 'white',
        boxShadow: 3,
        maxWidth: 350,
        mx: 'auto',
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6">{weatherData.name} 📍</Typography>
        <Typography variant="body2">{weatherData.date}</Typography>

        <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{weatherData.main.temp}°C</Typography>
          <CloudIcon sx={{ fontSize: 60 }} />
        </Box>

        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Grid container spacing={1} textAlign="center">
          <Grid item xs={6}>
            <Typography variant="body2">Humidity: {weatherData.humidity}%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Visibility: {weatherData.visibility}km</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Air Pressure: {weatherData.pressure} hPa</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Wind: {weatherData.wind}mph</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;