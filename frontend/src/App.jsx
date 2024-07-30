// src/App.jsx
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WeatherInfo from './components/WeatherSummary';
import WeatherSearch from "./components/WeatherSearch";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <WeatherInfo />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


