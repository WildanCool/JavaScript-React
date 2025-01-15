import axios from "axios";
import { useState, useEffect } from "react";

function CobaAxios2() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
      )
      .then((response) => {
        setWeather(response.data.current_weather);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }, []);
  }, []);

  return (
    <div>
      {weather ? (
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Wind Speed: {weather.windspeed} km/h</li>
          <li>Weather Code: {weather.weathercode}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CobaAxios2;
