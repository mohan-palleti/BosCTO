import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
function UserHome() {
  const SliderData = [
    "https://www.provimi.in/image/1432095109188/pet-page-banner-image.jpg",
    "https://www.betterwholesaling.com/wp-content/uploads/2019/06/Pet-Care.jpg",
    "https://www.redcross.org/on/demandware.static/-/Sites-RedCross-Library/default/dw8bc53abf/images/Coronavirus/2020.05.12-Caring-for-Pets-During-COVID-19-850x450.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <Navbar />
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default UserHome;
