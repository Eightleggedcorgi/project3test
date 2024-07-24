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

    useEffect(() => {
        getWeather()
    }, []);
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index weather={weather} createWeather={createWeather} />} />
                <Route path="/weather/:id" element={<Show />} />
            </Routes>
        </main>
    )
}

export default Home;
