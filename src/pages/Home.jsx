import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Category from "./../components/UI/category/category";
import Helmet from "./../components/Helmet/Helmet";
import ProductCart from "../components/UI/product-card/ProductCart";
import products from "../assets/fake-data/products";
import Testimonails from "../components/UI/slider/Testimonails";

import heroImg from "../assets/images/hero.png";
import featureImg1 from "../assets/images/service-01.png";
import featureImg2 from "../assets/images/service-02.png";
import featureImg3 from "../assets/images/service-03.png";
import foodCategoryImg1 from "../assets/images/hamburger.png";
import foodCategoryImg2 from "../assets/images/pizza.png";
import foodCategoryImg3 from "../assets/images/bread.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

import "../styles/heroSection.css"; 
import "../styles/home.css";

const featureData = [
  {
    title: "Quick delivery",
    img: featureImg1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, quas!",
    minus: "doloremque",
  },
  {
    title: "super dine in",
    img: featureImg2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, quas! ",
    minus: "doloremque",
  },
  {
    title: "easy pick up",
    img: featureImg3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, quas!",
    minus: "doloremque",
  },
];

const Home = () => {
  const [cat, setCat] = useState("All");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  useEffect(() => {
    if (cat === "All") {
      setAllProducts(products);
    }
    if (cat === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (cat === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (cat === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [cat]);

  return (
    <Helmet title="home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy Way to make an order</h5>
                <h1 className="hero_title mb-4">
                  <span>HUNGRY?</span> just wait <br /> food at{" "}
                  <span>your door</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum, vero! Fugit veritatis enim, vitae numquam quis dicta
                  aperiam corrupti vel!
                </p>
                <div className="hero_btns">
                  <button className="order_btn me-4">Order Now</button>
                  <button className="all_foods-btn">
                    <Link to="/foods">see all foods</Link>
                  </button>
                </div>

                <div className="hero_service d-flex mt-5  gap-5">
                  <p className="d-flex  gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i> No Shipping Fees
                    </span>
                  </p>
                  <p className="d-flex gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i> 100% secure
                      checkout
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_image">
                <img src={heroImg} alt="hero_img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">what we serve</h5>
              <h2 className="feature_title">just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quas!
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, debitis?
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm='6' key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img src={item.img} alt="feature_img" className="w-25 mb-3" />
                  <h5 className="fw-bold ">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="rowRow">
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_cat d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn ${cat === "All" ? "foodBtnActive" : ""}`}
                  onClick={() => {
                    setCat("All");
                  }}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    cat === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCat("BURGER");
                  }}
                >
                  <img src={foodCategoryImg1} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    cat === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCat("PIZZA");
                  }}
                >
                  <img src={foodCategoryImg2} alt="" />
                  pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    cat === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCat("BREAD");
                  }}
                >
                  <img src={foodCategoryImg3} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' key={item.id} className="mt-5 change">
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why_choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_tasty">
                <h2 className="tasty_title mb-4">
                  {" "}
                  why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  repellendus qui laudantium accusamus ipsa tempore maiores,
                  officiis soluta, nostrum iure voluptatem dignissimos nihil ut
                  rerum? Cupiditate corporis modi rerum vitae.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores, fugiat?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, illum.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Oreder from
                      any location
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus, illo?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' key={item.id} className='hotPizza'>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial_subtitle mb-4">Testimonials</h5>
                <h2 className="testimonial_title mb-4">What our <span>customer</span> are saying</h2>
                <Testimonails/>
              </div>
            </Col>
            <Col lg="6" md="6" className="mt-sm-5 mt-md-0 mt-lg-0">
              <img src={networkImg} alt="testimonials" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
