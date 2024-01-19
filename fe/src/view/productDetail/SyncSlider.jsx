import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import { Image } from "antd";
export default function SimpleSlider({
    data = [{
        img: "https://kenh14cdn.com/203336854389633024/2023/1/29/disaster-girl-2-167498860045777905319.jpeg"
    }, {
        img: "https://i.pinimg.com/564x/14/70/20/14702009f4f56465562d8a08d644ecc6.jpg"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBhNrPhB6QKvobHwFduV9jospq0XS3HdpBJcUuBeqteHntBBneORxhF-qY9X8FNN2Ch0&usqp=CAU"
    }, {
        img: "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/vxkf4gPld2qZqc8HQTvuIANjWKxehidlXnb4FXrQ.jpg"
    }, {
        img: "https://cdn.luatminhkhue.vn/lmk/article/nguoi-mat-tho.jpg"
    }, {
        img: "https://i.pinimg.com/736x/dc/98/d4/dc98d4081bc8bdb305e60b7c9179c52f.jpg"
    }]
}) {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div style={{
            maxWidth: "520px",
            width: "520px",
            border: "1px solid #D0D0D0",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                {data.map((item, index) => {
                    return <div className="slick-item-1" key={index}>
                        <Image style={{
                            width: "510px",
                            height: "500px"
                        }} src={item.img} alt="index" />
                    </div>
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
                    return <div className="slick-item" key={index}>
                        <img src={item.img} alt="" />
                    </div>
                })}
            </Slider >
        </div >
    );
}