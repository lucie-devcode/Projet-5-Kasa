import { useState } from "react";
import "./Carousel.scss";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  };

  const prev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button onClick={prev} className="prev">
            ‹
          </button>
          <button onClick={next} className="next">
            ›
          </button>
          <p className="counter">
            {index + 1}/{pictures.length}
          </p>
        </>
      )}

      <img src={pictures[index]} alt="Logement" />
    </div>
  );
}

export default Carousel;
