import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: '',
    type: '',
    startdate: '',
    enddate: '',
    locations: '',
    deathtoll: '',
    estdamages: '',
  });

  const handleChange = (e) => {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createWeather(newForm);
    // Clear form
    setNewForm({
      name: '',
      type: '',
      startdate: '',
      enddate: '',
      locations: '',
      deathtoll: '',
      estdamages: '',
    });
  };

  const loaded = () => {
    return props.weather.map((weather) => (
      <div key={weather._id} className="weather">
        <Link to={`/weather/${weather._id}`}>
          <h1>{weather.name}</h1>
        </Link>
        <img src={weather.image} alt={weather.type} />
        <h3>{weather.locations}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newForm.name}
          onChange={handleChange}
        />
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={newForm.type}
          onChange={handleChange}
        />
        <label>Start Date:</label>
        <input
          type="date"
          name="startdate"
          value={newForm.startdate}
          onChange={handleChange}
        />
        <label>End Date:</label>
        <input
          type="date"
          name="enddate"
          value={newForm.enddate}
          onChange={handleChange}
        />
        <label>Locations:</label>
        <input
          type="text"
          name="locations"
          value={newForm.locations}
          onChange={handleChange}
        />
        <label>Death Toll:</label>
        <input
          type="number"
          name="deathtoll"
          value={newForm.deathtoll}
          onChange={handleChange}
        />
        <label>Estimated Damages:</label>
        <input
          type="text"
          name="estdamages"
          value={newForm.estdamages}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {props.weather ? loaded() : loading()}
    </section>
  );
}

export default Index;
