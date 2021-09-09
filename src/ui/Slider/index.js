import React from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { slides } = props;
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {slides.map((item) => {
          return (
            <div key={item.text} className={styles.item}>
              <img className={styles.img} src={item.img} alt="foto"></img>
              <div className={styles.desc}> {item.text}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
