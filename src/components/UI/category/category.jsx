import React from "react";
import { Container, Row, Col } from "reactstrap";

import catergoryImg1 from "../../../assets/images/category-01.png";
import catergoryImg2 from "../../../assets/images/category-02.png";
import catergoryImg3 from "../../../assets/images/category-03.png";
import catergoryImg4 from "../../../assets/images/category-04.png";

import '../../../styles/cat.css';
const categoryData = [
  {
    display: "Fast Food",
    imgURL: catergoryImg1,
  },
  {
    display: "Pizza",
    imgURL: catergoryImg2,
  },
  {
    display: "Asian Food",
    imgURL: catergoryImg3,
  },
  {
    display: "Row Meat",
    imgURL: catergoryImg4,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item,index)=>(
             <Col lg="3" md="4" sm="6" xs='6' key={index} className="mb-4">
                <div className="category_item d-flex align-items-center gap-3">
                    <div className="cat_img">
                        <img src={item.imgURL} alt="cat_item" />
                    </div>
                    <h6>{item.display}</h6>
                </div>
             </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
