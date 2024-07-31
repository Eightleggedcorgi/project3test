// src/components/Home.jsx
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import WeatherList from "../pages/WeatherList";
import WeatherEdit from "../pages/WeatherEdit";

const Home = () => {
  const [weather, setWeather] = useState(null);

  const URL = "http://localhost:3000/weather/";

  const getWeather = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWeather(data.data);
  };

  const createWeather = async (weather) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weather),
    });
    getWeather();
  };

  const updateWeather = async (weather, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weather),
    });
    getWeather();
  };

  const deleteWeather = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getWeather();
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<WeatherList weather={weather} />} />
        <Route path="/upload" element={<Index weather={weather} createWeather={createWeather} />} />
        <Route path="/weather/:id" element={
          <WeatherEdit
            weather={weather}
            updateWeather={updateWeather}
            deleteWeather={deleteWeather}
          />
        } />
      </Routes>
    </main>
  );
};

export default Home;
