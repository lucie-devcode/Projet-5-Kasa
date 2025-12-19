import React from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import Banner from "./Components/Banner.jsx";
import ApartmentGrid from "./Components/ApartmentGrid.jsx";
import Footer from "./Components/Footer.jsx";

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
