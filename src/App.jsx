import React from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Banner from "./Components/Banner.jsx";
import ApartmentGrid from "./Components/ApartmentGrid.jsx";

function App() {
  return (
    <>
      <div className="header">
        <Navbar />
        <Banner />
      </div>

      <ApartmentGrid />
    </>
  );
}

export default App;
