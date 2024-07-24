import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Home = (props) => {
  return (
      <main>
          <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/weather/:id" element={<Show/>}/>
          </Routes>
      </main>
  )
}

export default Home;
