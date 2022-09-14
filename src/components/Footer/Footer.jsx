import React from "react";
import { Container, Row, Col , ListGroup , ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" xs='6'>
            <div className="footer_logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolore libero</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" xs='6'>
            <div className="delivery">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item border-0 ps-0">
                <span>Sunday thursday </span>
                <p>10:00 PM - 11:00 PM </p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item fri border-0 ps-0">
                <span>Friday saturday</span>
                <p>off day </p>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6" xs='6' className="contact">
          <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time_list ">
              
              <ListGroupItem className="delivery_time_item location border-0 ps-0">
                <span>Location: Egypt - Masnourah</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item phone border-0 ps-0">
                <span>Phone: 01102050619</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item email border-0 ps-0">
                <span>Email : ahmed@gmail.com </span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6" xs='6' className="news">
            <h5 className="footer_title">Newsletter</h5>
            <p>subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email"  placeholder="enter Email"/>
              <span>
              <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
