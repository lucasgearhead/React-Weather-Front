import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HistoryPage.css";

function HistoryPage() {
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    fetchWeatherHistory();
  }, []);

  const fetchWeatherHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/weather/history/"
      );
      setWeatherHistory(response.data.weather_history);
    } catch (error) {
      console.error("Error fetching weather history:", error);
    }
  };

  const handleExpand = (weatherId) => {
    if (expandedItem === weatherId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(weatherId);
    }
  };

  const handleDelete = async (weatherId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("User is not authenticated");
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8000/weather/history/${weatherId}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchWeatherHistory(); // Atualizar a lista após a exclusão
    } catch (error) {
      console.error("Error deleting weather record:", error);
    }
  };

  return (
    <div>
      <h1>Weather History</h1>
      {weatherHistory.map((item) => (
        <div
          key={item._id}
          className="weather-summary"
          onClick={() => handleExpand(item._id)}
        >
          <p>City: {item.city}</p>
          <p>Temperature: {item.temp}</p>
          <p>Description: {item.weather_description}</p>
          {expandedItem === item._id && (
            <div className="weather-details">
              <p>Longitude: {item.coord_lon}</p>
              <p>Latitude: {item.coord_lat}</p>
              <p>Pressure: {item.pressure}</p>
              {/* Adicionar outras informações aqui conforme necessário */}
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;
