import { Box, Card, Typography, Grid } from '@mui/material';

const HourlyForecast = ({ hourlyData }) => {
  const limitedHours = hourlyData?.slice(0, 6);

  return (
    <Box mt={3} px={1} sx={{ mt: 3, width: '100%', maxWidth: 700 }}>
      <Grid container spacing={2} justifyContent="center">
        {limitedHours?.map((hour) => (
          <Grid item key={hour.time} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                minWidth: 80,
                borderRadius: 4,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
                color: 'white',
                p: 1,
                flexShrink: 0,
                justifyContent: 'center',
                overflowX: 'auto',
                flexWrap: 'nowrap',
              }}
            >
              <Typography variant="caption" display="block" sx={{ opacity: 0.9 }}>
                {hour.time}
              </Typography>
              <Box component="img" src={hour.icon} alt="weather" sx={{ width: 30, height: 30, mx: 'auto', my: 0.5 }} />
              <Typography variant="body1" fontWeight="bold">
                {hour.temp}°
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HourlyForecast;