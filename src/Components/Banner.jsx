import React from "react";
import photoBanner from "../assets/images/photo-banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={photoBanner} alt="photo de bannière" />
    </div>
  );
}

export default Banner;
