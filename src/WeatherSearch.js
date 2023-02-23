import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [displayWeather, setDisplayWeather] = useState("");

  function showData(response) {
    var cityName = response.data.name;
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setDisplayWeather(
      <div>
        <h4>Current weather in {cityName}:</h4>
        <ul>
          <li>Temperature: {Math.round(temperature)} °C</li>
          <li>Description: {description} </li>
          <li>Humidity: {Math.round(humidity)} % </li>
          <li>Wind: {Math.round(wind * 3.6)} km/h </li>
          <li>
            <img src={icon} alt={description} width="80" />
          </li>
        </ul>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a6432c5ca7b6f9b0bee45c98d54ea71&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  return (
    <div className="panel">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {displayWeather}
    </div>
  );
}
