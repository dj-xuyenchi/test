import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Image } from "antd";
export default function SimpleSlider({ data = [] }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div
      style={{
        maxWidth: "520px",
        width: "520px",
        border: "1px solid #D0D0D0",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {data.map((item, index) => {
          return (
            <div className="slick-item-1" key={index}>
              <Image
                style={{
                  width: "510px",
                  height: "500px",
                }}
                src={item.link}
                alt="index"
              />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {data.map((item, index) => {
          return (
            <div className="slick-item" key={index}>
              <img src={item.link} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
