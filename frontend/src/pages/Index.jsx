import { useState } from "react";
import {Link} from "react-router-dom"

const Index = (props) => {

  // loaded function
  const loaded = () => {
    return props.weather.map((weather) => (
      <div key={weather._id} className="weather">
        <Link to={`/weather/${weather._id}`}><h1>{weather.name}</h1></Link>
        <img src={weather.image} alt={weather.name} />
        <h3>{weather.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.weather ? loaded() : loading());
}

export default Index
