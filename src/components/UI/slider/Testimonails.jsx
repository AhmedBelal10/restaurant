import React from "react";


import ava01 from '../../../assets/images/ava-1.jpg';


import '../../../styles/slider.css'
const Testimonails = () => {
  return (
    <>
      <div className="">
        <p className="review_text">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum hic culpa iure magni? Illum amet, quae ipsum doloremque nihil dolore natus animi pariatur obcaecati quod, itaque dolorum delectus sunt autem?"
        </p>
        <div  className="slider_content d-flex align-items-center gap-3 mb-5">
            <img src={ava01} alt="avatar" className="rounded"/>
            <h2 className="review_name">Ahmed Belal</h2>
        </div>
      </div> 
    </>
  );
};

export default Testimonails;
