import React from 'react';
import './App.css';
import './Weather.css';


export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 23,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className='container'>
    <div className="Weather">
      <ul className='city-list'>
        <li className='navigation-item'>
          <a href='/'>Lisbon</a></li>
        <li className='navigation-item'>
          <a href='/'>Paris</a></li>
        <li className='navigation-item'>
          <a href='/'>Sydney</a></li>
        <li className='navigation-item'>
          <a href='/'>San Francisco</a></li>
      </ul>
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Current"
              className="btn btn-success w-100"
            />
          </div></div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    <small>
        <a href="https://github.com/Strelna/weather-homework-app">Open sourced</a>by<a href="https://www.linkedin.com/in/olena-dudnyk/"> Olena Dudnyk</a>
</small>
   </div>
  );
}
