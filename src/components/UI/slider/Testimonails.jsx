import React from "react";
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/slider.css'
const Testimonails = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slideToShow: 1,
    slideToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic culpa iure magni? Illum amet, quae ipsum doloremque nihil dolore natus animi pariatur obcaecati quod, itaque dolorum delectus sunt autem?"
        </p>
        <div  className="slider_content d-flex align-items-center gap-3">
            <img src={ava01} alt="avatar" className="rounded"/>
            <h2 className="review_name">Ahmed Belal</h2>
        </div>
      </div>
      <div>
        <p className="review_text">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic culpa iure magni? Illum amet, quae ipsum doloremque nihil dolore natus animi pariatur obcaecati quod, itaque dolorum delectus sunt autem?"
        </p>
        <div  className="slider_content d-flex align-items-center gap-3">
            <img src={ava02} alt="avatar" className="rounded"/>
            <h2 className="review_name">Sara Mohamed</h2>
        </div>
      </div>
      <div>
        <p className="review_text">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic culpa iure magni? Illum amet, quae ipsum doloremque nihil dolore natus animi pariatur obcaecati quod, itaque dolorum delectus sunt autem?"
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
            <img src={ava03} alt="avatar" className="rounded"/>
            <h2 className="review_name">Essam Sayd</h2>
        </div>
      </div>
      
    </Slider>
  );
};

export default Testimonails;
