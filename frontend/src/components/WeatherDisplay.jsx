import React, { useEffect, useState } from 'react';

const WeatherInfo = () => {
    const [weatherSum, setWeatherSum] = useState(null);
    const [updatedAt, setUpdatedAt] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('http://localhost:3000/weather/latest');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherSum(data.data.summary);
                setUpdatedAt(data.data.updatedAt);
                setTemperature(data.data.temperature);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Local Summary</h2>
            {/* <h3>Current Temperature: {temperature}°F</h3> */}
            <pre>{JSON.stringify(weatherSum, null, 2)}</pre>
            <p>Last Updated: {new Date(updatedAt).toLocaleString()}</p>

        </div>
    );
};

export default WeatherInfo;
