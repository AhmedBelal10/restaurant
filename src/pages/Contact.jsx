import React  from 'react'
import CommonSection from "./../components/UI/common-section/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/contact.css';


const Contact = () => {
  const submit = e =>{
    e.preventDefault();
  } 
  return (
    <Helmet title="Contact">
    <CommonSection title="Contact Us" />
    <section>
      <Container>
        <Row>
          <Col xl='' lg='' md='' sm='' xs=''>
          <form action="" className="form mb-5" onSubmit={submit}>
               
                <div className="form_group_contact form_group">
                  <input type="text" placeholder='Enter your name' required />
                </div>
                <div className="form_group_contact form_group">
                  <input type="Email" placeholder='Enter your Email' required />
                </div>
                <div className="form_group_contact form_group ">
                  <textarea  placeholder='Enter Message'></textarea>
                </div>
                <button type='submit' className="addToCart_btn contactButton">Send Message</button>
              </form>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Contact