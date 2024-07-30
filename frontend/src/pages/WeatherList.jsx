import React from "react";
import { Link } from "react-router-dom";

const WeatherList = ({ weather }) => {
    if (!weather) return <p>Loading...</p>;

    return (
        <div className="weather-list">
            <h2>Emergency Weather Data</h2>
            <div className="weather-container">
                {weather.map((weatherItem) => (
                    <div key={weatherItem._id} className="weather-item">
                        <img src={weather.image} alt={weather.type} />
                        <Link to={`/weather/${weatherItem._id}`}>
                            <h3>{weatherItem.name}</h3>
                        </Link>
                        <p>{weatherItem.locations}</p>
                        <p>Death Toll: {weatherItem.deathtoll}</p>
                        <p>Estimated Damages: {weatherItem.estdamages}</p>
                    </div>
                ))}
            </div>
            <div>
            <Link to="/upload">Add New Weather Report</Link>
            </div>
        </div>
    );
};

export default WeatherList;
