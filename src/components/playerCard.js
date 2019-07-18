import React, { useState } from "react";
import Swiper from "react-id-swiper";

const PlayerCard = () => {
  const [swiper, updateSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true
  };
  return (
    <div>
      <Swiper {...params} getSwiper={updateSwiper}>
        <div
          style={{ backgroundColor: "red", height: "350px", width: "300px" }}
        />
        <div
          style={{ backgroundColor: "blue", height: "350px", width: "300px" }}
        />
        <div
          style={{ backgroundColor: "green", height: "350px", width: "300px" }}
        />
        <div
          style={{ backgroundColor: "purple", height: "350px", width: "300px" }}
        />
        <div
          style={{ backgroundColor: "tomato", height: "350px", width: "300px" }}
        />
      </Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};
export default PlayerCard;
