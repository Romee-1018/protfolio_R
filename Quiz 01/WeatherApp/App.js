import React, { useState } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: "Sunny",
  });

  const [theme, setTheme] = useState("light");

  const getIconForCondition = (condition) => {
    const icons = {
      Sunny: "☀",
      Cloudy: "☁",
      "Partly Cloudy": "⛅",
    };
    return icons[condition] || "🌤";
  };

  const updateWeather = (e) => {
    const condition = e.target.value;
    const tempMap = {
      Sunny: 30,
      Cloudy: 18,
      "Partly Cloudy": 25,
    };

    setWeatherData({
      temperature: tempMap[condition] || 22,
      condition,
    });
  };

  const themeBackgrounds = {
    light: "linear-gradient(to bottom, #FF7E5F, #FEB47B)",
    blue: "linear-gradient(to bottom, #4facfe, #00f2fe)",
    morning: "linear-gradient(to bottom, #fbc2eb, #a6c1ee)",
    night: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
  };

  return (
    <div style={{ ...styles.container, background: themeBackgrounds[theme] }}>
      <h1 style={styles.title}>Weather App</h1>
      <div style={styles.icon}>{getIconForCondition(weatherData.condition)}</div>
      <div style={styles.temp}>{weatherData.temperature}°C</div>
      <div style={styles.text}>{weatherData.condition}</div>

      <select
        value={weatherData.condition}
        onChange={updateWeather}
        style={styles.select}
      >
        <option value="Sunny">Sunny</option>
        <option value="Cloudy">Cloudy</option>
        <option value="Partly Cloudy">Partly Cloudy</option>
      </select>

      <div style={{ marginTop: "2rem" }}>
        <label style={styles.label}>Select Theme: </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={styles.select}
        >
          <option value="light">Sunset Orange</option>
          <option value="blue">Cool Blue</option>
          <option value="morning">Morning Sky</option>
          <option value="night">Night Mode</option>
        </select>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
    transition: "background 0.5s ease",
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "1.5rem",
    color: "#fff",
    textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
  },
  icon: {
    fontSize: "6rem",
    marginBottom: "1rem",
    textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
  },
  temp: {
    fontSize: "5.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#fff",
    textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
  },
  text: {
    fontSize: "2.5rem",
    color: "#fff",
    marginBottom: "1.5rem",
  },
  select: {
    padding: "1rem",
    fontSize: "1.5rem",
    borderRadius: "12px",
    border: "2px solid #fff",
    backgroundColor: "#FF5733",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "4px 4px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  label: {
    fontSize: "1.25rem",
    color: "#fff",
    marginRight: "1rem",
  },
};

export default WeatherApp;
