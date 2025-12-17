import React from "react";
import "./Banner.scss";
import photoBanner from "../assets/images/photo-banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={photoBanner} alt="photo de bannière" />
      <h1> Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
