import React, { useState, useEffect } from "react";
import arrow_right from "../../assets/arrow_right.svg";
import arrow_left from "../../assets/arrow_left.svg";
import "../../components/Slider/Slider.css";

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = props.value.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const [matches, setMatches] = useState(window.matchMedia("(min-width:376px)").matches);
  useEffect(() => {
    window.matchMedia("(min-width: 376px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <section className="slider">
      {length > 1 && <img src={arrow_left} className="slider__arrow-left" alt="" onClick={prevSlide} />}

      {props.value.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide-active" : "slide"} key={index}>
            {index === currentSlide && <img src={slide} alt="" className="image" />}
            {matches && <h4 className="slider__number">{index + 1 + "/" + length}</h4>}
          </div>
        );
      })}
      {length > 1 && <img src={arrow_right} className="slider__arrow-right" alt="" onClick={nextSlide} />}
    </section>
  );
}
export default Slider;
