import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const allWeather = props.weather;
  const weather = allWeather.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(weather);

  // handleChange function for form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateWeather(editForm, weather._id);
    navigate("/");
  };

  const removeWeather = (e) => {
    e.preventDefault();
    props.deleteWeather(weather._id);
    navigate("/");
  };

  if (!weather) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="weather">
      <h1>{weather.name}</h1>
      <h2>{weather.type}</h2>
      {/* <img src={weather.image} alt={weather.name} /> will use if we need to add images*/}
      <button id="delete" onClick={removeWeather}>
        DELETE
      </button>
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
    </div>
  );
};

export default Show;


      

  


