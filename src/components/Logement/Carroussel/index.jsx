import { useState } from "react";
import left from "../../../assets/vector-left.svg";
import right from "../../../assets/vector-right.svg";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="carrousel-container">
      {length > 1 && <img src={left} alt="gauche" onClick={prevSlide} className="left-arrow" />}
      {length > 1 && <img src={right} alt="droite" onClick={nextSlide} className="right-arrow" />}
      {slides.map((slide, index) => (
        <div key={index} className={current === index ? "carrousel active-animation" : "carrousel"}>
          {index === current && <img src={slide} alt="appartement en location" />}
          {index === current && (
            <span className="carrousel__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
export default Carrousel;
