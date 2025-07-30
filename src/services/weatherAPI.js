import axios from 'axios';

const API_KEY = '74becded473b4840a8752940252807';

export const fetchWeather = async (city) => {
  const res = await axios.get(
    `https://api.weatherapi.com/v1/current.json`,
    {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no',
      },
    }
  );

  return {
    name: res.data.location.name,
    date: res.data.location.localtime.split(' ')[0],
    main: {
      temp: res.data.current.temp_c,
    },
    weather: [
      {
        description: res.data.current.condition.text,
      },
    ],
    humidity: res.data.current.humidity,
    visibility: res.data.current.vis_km,
    pressure: res.data.current.pressure_mb,
    wind: res.data.current.wind_mph,
  };
};

export const fetchHourlyForecast = async (city) => {
  const res = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json`,
    {
      params: {
        key: API_KEY,
        q: city,
        days: 1, 
        aqi: 'no',
      },
    }
  );

  const hourlyData = res.data.forecast.forecastday[0].hour.map((hour) => ({
    time: hour.time.split(' ')[1],
    temp: hour.temp_c,
    icon: hour.condition.icon, 
  }));

  return hourlyData;
};