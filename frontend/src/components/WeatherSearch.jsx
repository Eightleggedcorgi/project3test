import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import searchI from '../assets/sec.gif';
import clearI from '../assets/clear.png'
import humidityI from '../assets/humidity.png'
import windI from '../assets/wind.png'

const Weather = () => {
    const searchRef = useRef()
    const[weatherData, setWeatherData] =useState (false);
    const allIcons = {
        "01d":clearI,
    }
    const search = async (city) =>{
        if(city ===""){
            alert("Enter City Name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const response = await fetch(url);
        const data = await response.json();
        if(!response.ok){
            alert(data.message);
            return;
        }
        console.log(data);
        const icon = allIcons[data.weather[0].icon] || clearI;
        
        setWeatherData({
            humidity:data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        })

        } catch (error) {
            setWeatherData(false);
            console.error("Cannot fetch data")
            
        }
    }
    useEffect (()=>{
        search("New York");
    },[])
    return (
        <div className='weather'>
            <div className="search-bar">
                <input ref={searchRef} type="text" placeholder='Search City' />
                <img src={searchI} alt={"S"} onClick={()=> search(searchRef.current.value)}/>
            </div>

            <img src={clearI} alt="" className='weather-icon' />
            <p className="temperature">{weatherData.temperature}&deg;C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
                <div className="column">
                    <img src={humidityI} alt="" />
                    <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                    </div>
                </div>
                <div className="column">
                    <img src={windI} alt="" />
                    <div>
                    <p>{weatherData.windSpeed}Km/h</p>
                    <span>Wind Speed</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Weather;
