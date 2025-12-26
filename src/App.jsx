import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Banner from "./Components/Banner/Banner.jsx";
import ApartmentGrid from "./Components/ApartmentGrid/ApartmentGrid.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import Error from "./pages/Error";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-layout">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Apartment />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
