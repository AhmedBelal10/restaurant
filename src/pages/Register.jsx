import React , {useRef} from 'react'
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/UI/common-section/CommonSection';
import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const nameRef = useRef();
  const passRef = useRef();

  const submit = e =>{
    e.preventDefault();
  } 

  return <Helmet title='signUp'>
    <CommonSection title='signUp'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form action="" className="form mb-5" onSubmit={submit}>
                <div className="form_group">
                  <input type="text" placeholder='Enter Name' required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder='Enter Email' required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='Enter password' required />
                </div>
                <div className="form_group">
                  <input type="password" placeholder='Rewrite password' required />
                </div>
                <button type='submit' className="addToCart_btn">signUp</button>
              </form>
              <Link to='/login'>Already have an account? <span className='text-decoration-underline text-danger'>Please Login</span> </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register;