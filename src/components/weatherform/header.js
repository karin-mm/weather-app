<AppBar position="static" color="transparent" elevation={0}>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Typography variant="h1" fontWeight={100}> WeatherMe</Typography>

    <Box display="flex" alignItems="center" gap={2}>
      <ToggleButtonGroup exclusive>
        <ToggleButton value="celsius">°C</ToggleButton>
        <ToggleButton value="fahrenheit">°F</ToggleButton>
      </ToggleButtonGroup>

      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="Today" />
        <Tab label="Tomorrow" />
        <Tab label="Monthly Forecast" />
      </Tabs>
    </Box>
  </Toolbar>
</AppBar>
