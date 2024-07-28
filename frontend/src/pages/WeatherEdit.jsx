// src/components/WeatherEdit.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const WeatherEdit = ({ weather, updateWeather, deleteWeather }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const weatherItem = weather.find((item) => item._id === id);

  const [editForm, setEditForm] = useState(weatherItem);

  useEffect(() => {
    if (weatherItem) {
      setEditForm(weatherItem);
    }
  }, [weatherItem]);

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWeather(editForm, weatherItem._id);
    navigate("/");
  };

  const handleDelete = () => {
    deleteWeather(weatherItem._id);
    navigate("/");
  };

  if (!weatherItem) return <p>Loading...</p>;

  return (
    <div className="weather">
      <h1>Edit Weather Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={editForm.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startdate"
            value={editForm.startdate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="enddate"
            value={editForm.enddate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Locations:</label>
          <input
            type="text"
            name="locations"
            value={editForm.locations}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Death Toll:</label>
          <input
            type="number"
            name="deathtoll"
            value={editForm.deathtoll}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estimated Damages:</label>
          <input
            type="text"
            name="estdamages"
            value={editForm.estdamages}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WeatherEdit;
