import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Home = (props) => {
    const [weather, setWeather] = useState(null);

    const URL = "http://localhost:3000/weather/";

    const getWeather = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setWeather(data.data);
    };

    const createWeather = async (weather) => {
        // make post request to create weather alerts
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(weather),
        });
        // update list of weather
        getWeather();
    };

    const updateWeather = async (weather, id) => {
        // make post request to create weather
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
        // update list of people
        getWeather();
      };
      
      const deleteWeather = async (id) => {
        // make post request to create people
        await fetch(URL + id, {
            method: "DELETE",
        });
        // update list of people
        getWeather();
      };

    useEffect(() => {
        getWeather()
    }, []);
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index weather={weather} createWeather={createWeather} />} />
                <Route path="/weather/:id" element={<Show weather={weather} 
                updateWeather={updateWeather} 
                deleteWeather={deleteWeather}/>} />
            </Routes>
        </main>
    )
}

export default Home;
