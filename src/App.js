import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routeData } from "./routeData"; // Import the route data

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routeData.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
