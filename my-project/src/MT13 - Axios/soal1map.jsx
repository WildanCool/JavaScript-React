import axios from "axios";
import { useState, useEffect } from "react";

function AxiosMap() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
      )
      .then((response) => {
        const currentWeather = response.data.current_weather;
        const weatherArray = [
          {
            id: 1,
            label: "Temperature",
            value: `${currentWeather.temperature}°C`,
          },
          {
            id: 2,
            label: "Wind Speed",
            value: `${currentWeather.windspeed} km/h`,
          },
          { id: 3, label: "Weather Code", value: currentWeather.weathercode },
        ];
        setWeather(weatherArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {weather.length > 0 ? (
        <ul>
          {weather.map((item) => (
            <li key={item.id}>
              {item.label}: {item.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AxiosMap;
