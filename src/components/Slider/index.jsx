import React, { useState } from "react";
import arrow_right from "../../assets/arrow_right.svg";
import arrow_left from "../../assets/arrow_left.svg";
import "../../styles/Slider.css";

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = props.value.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };


  return (
    <section className="slider">
      <img src={arrow_left} className="slider__arrow-left" alt="" onClick={prevSlide} />
      {props.value.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide-active" : "slide"} key={index}>
            {index === currentSlide && <img src={slide} alt="" className="image" />}
          </div>
        );
      })}
      <img src={arrow_right} className="slider__arrow-right" alt="" onClick={nextSlide} />
    </section>
  );
}
export default Slider;
