import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Cyrus is a great mobile developer. The app’s User Interface was awesome and designed in detail using perfect color schemes. The communication was great and every milestone we set was achieved on time.",
    },
    {
      img: profilePic2,
      review:
        "Sunning results. The User Interface for our blog is fantastic and meticulously developed with the right color schemes. Every goal we established was timely achieved, and communication was excellent.",
    },
    {
      img: profilePic3,
      review:
        " Stunning works of art! Our online shop has never looked better. And the functionalities include an automated inventory system that just make stocktaking easier. ",
    },
    {
      img: profilePic4,
      review:
        "He has a good work ethic as the project was delivered on schedule, cost effective and useful in every sense. What I loved most is the constant updates during development that captured all I need from my site.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
