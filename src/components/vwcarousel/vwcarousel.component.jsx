import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./vwcarousel.style.css";
import bg1 from "../../assets/img/carousel/bg1.webp";
import bg2 from "../../assets/img/carousel/bg2.webp";
import bg3 from "../../assets/img/carousel/bg3.webp";

const VWCarousel = () => {
  return (
    <div id ="home">
      <Carousel
        controls={false}
        indicators={true}
        interval={6666}
        pauseonhover={"false"}
      >
        <Carousel.Item>
          <img className="d-block w-100 customized-carousel" src={bg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 customized-carousel" src={bg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 customized-carousel" src={bg3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default VWCarousel;
