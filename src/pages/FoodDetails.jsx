import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "./../assets/fake-data/products";
import Helmet from "./../components/Helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";

import "../styles/product-details.css";
import ProductCart from './../components/UI/product-card/ProductCart';

const FoodDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [tab, setTab] = useState("desc");
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [enteredName , setEnteredName] = useState('');
  const [enteredEmail , setEnteredEmail] = useState('');
  const [reviewMsg , setReviewMsg]  = useState('')
  const dispatch = useDispatch();
  const { title, price, category, desc , image01 } = product;
  const relatedProduct = products.filter(item => category === item.category)
  


  const addItem = ()=>{
    dispatch(cartActions.addItem({id,title,price,image01}))
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(enteredName , enteredEmail , reviewMsg);
  }
  useEffect(()=>{
    setPreviewImg(product.image01)
  },[product])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images">
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img
                    src={product.image01}
                    alt="product-img"
                    className="w-50"
                  />
                </div>
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img
                    src={product.image02}
                    alt="product-img"
                    className="w-50"
                  />
                </div>
                <div
                  className="img_item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img
                    src={product.image03}
                    alt="product-img"
                    className="w-50"
                  />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product_main_img">
                <img src={previewImg} alt="product-img" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single_product_content">
                <h2 className="product_title mb-3">{title}</h2>
                <p className="product_price">
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button className="addToCart_btn" onClick={addItem}>Add to cart</button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 className={`${tab === 'desc' ?'tab_active' : ''}`} onClick={() => setTab("desc")}>
                  Description
                </h6>
                <h6 className={`${tab === 'review' ?'tab_active' : ''}`} onClick={() => setTab("review")}>Review</h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  <div className="review pt-5">
                    <p className="user_name mb-0">Ahmed Belal</p>
                    <p className="user_email">smartCodeAcademy2020@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Ahmed Belal</p>
                    <p className="user_email">smartCodeAcademy2020@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Ahmed Belal</p>
                    <p className="user_email">smartCodeAcademy2020@gmail.com</p>
                    <p className="feedback_text">great product</p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input type="text" placeholder="Enter your name" onChange={e =>setEnteredName(e.target.value)} required />
                    </div>
                    <div className="form_group">
                      <input type="text" placeholder="Enter your Email" onChange={e =>setEnteredEmail(e.target.value)} required/>
                    </div>
                    <div className="form_group">
                      <textarea rows={5} placeholder="Enter your Review" onChange={e =>setReviewMsg(e.target.value)} required />
                    </div>
                    <button type="submit" className="addToCart_btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg='12' className="mb-5 mt-4">
              <h2 className="related_product_title">You might also like</h2>
            </Col>
            {
              relatedProduct.map(item =>(
                <Col lg='3' md='4' sm='6' xs='6' className="mb-4" key={item.id}>
                    <ProductCart item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
