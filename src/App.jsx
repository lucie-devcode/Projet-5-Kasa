import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Banner from "./Components/Banner/Banner.jsx";
import ApartmentGrid from "./Components/ApartmentGrid/ApartmentGrid.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <Banner />
        <ApartmentGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
