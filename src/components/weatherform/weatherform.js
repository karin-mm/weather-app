import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { Card, Typography, Divider, Grid } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { toast } from 'react-toastify';

const WeatherForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { city: '' },
    validationSchema: Yup.object({
      city: Yup.string().required('City is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values.city);
      toast.success(`Searching weather for ${values.city}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          label="City"
          name="city"
          variant="outlined"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <Button type="submit" variant="contained">Search</Button>
      </Box>
    </form>
  );
};

  <Card
  sx={{
    p: 3,
    borderRadius: 5,
    background: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
    color: 'white',
    boxShadow: 5,
    maxWidth: 300,
    mx: 'auto',
  }}
  >
    
  <Box my={2} display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h2">27°C</Typography>
    <CloudIcon sx={{ fontSize: 60 }} />
  </Box>

  <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.2)' }} />

  <Grid container spacing={2}>
    <Grid item xs={6}>Humidity: 99%</Grid>
    <Grid item xs={6}>Visibility: 8km</Grid>
    <Grid item xs={6}>Air Pressure: 1005 hPa</Grid>
    <Grid item xs={6}>Wind: 2mph</Grid>
  </Grid>
  </Card>

export default WeatherForm;
