import React, { useState } from "react";
import axios from "axios";
import "./WeatherPage.css";

function WeatherPage() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [appid, setAppId] = useState("your-api-key"); // Insira sua chave de API do OpenWeatherMap aqui
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/weather/?city=${city}&appid=${appid}&units=${units}`
      );
      setWeatherData(response.data);
      setError(null); // Limpar erro se a requisição for bem-sucedida
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setError("Erro ao obter dados do clima.");
    }
  };

  return (
    <div>
      <h1>Weather Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="units">Units:</label>
        <select
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        >
          <option value="metric">Metric (°C)</option>
          <option value="imperial">Imperial (°F)</option>
          <option value="standard">Standard (K)</option>
        </select>
        <label htmlFor="appid">App ID:</label>
        <input
          type="text"
          id="appid"
          value={appid}
          onChange={(e) => setAppId(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>Weather Data</h2>
          <p>City: {weatherData.name}</p>
          <p>Country: {weatherData.sys.country}</p>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Feels Like: {weatherData.main.feels_like}</p>
          <p>Min Temperature: {weatherData.main.temp_min}</p>
          <p>Max Temperature: {weatherData.main.temp_max}</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Visibility: {weatherData.visibility} meters</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          {weatherData.weather && weatherData.weather.length > 0 && (
            <div>
              <p>Weather: {weatherData.weather[0].main}</p>
              <p>Description: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
