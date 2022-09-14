import React , {useState} from 'react'
import { useSelector } from 'react-redux'
import { Container , Row , Col  } from 'reactstrap'
import CommonSection from './../components/UI/common-section/CommonSection';
import Helmet from './../components/Helmet/Helmet';
import '../styles/checkout.css';

const Checkout = () => {
  const [enterName , setEnterName] = useState('');
  const [enterEmail , setEnterEmail] = useState('');
  const [enterNumber , setEnterNumber] = useState('');
  const [enterCountry , setEnterCountry] = useState('');
  const [enterCity , setEnterCity] = useState('');
  const [postalCode , setPostalCode] = useState('');
  const shippingInfo = []

  const cartTotalAmount = useSelector(state=>state.cart.totalAmount);
  const shippingCost = 30;
  const finalPrice = cartTotalAmount + Number(shippingCost); 

  const submit = e =>{
    e.preventDefault();
    const userShippingAddress = {
      name : enterName , 
      email : enterEmail,
      phone : enterNumber,
      country : enterCountry,
      city : enterCity,
      postalCode : postalCode
    };
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo);
  }

  return <Helmet title='Checkout'>
    <CommonSection title='Checkout'/>
    <Container className='mt-5'>
      <Row>
        <Col lg='8' md='6' sm='10' xs='10' className='m-auto'>
          <h6 className='mb-4'>Shipping Address</h6>
            <form className="checkout_form" onSubmit={submit}>
              <div className="form_group">
                <input type="text" placeholder='Enter your name'required onChange={e=>setEnterName(e.target.value)} />
              </div>
              <div className="form_group">
                <input type="email" placeholder='Enter your email' required onChange={e=>setEnterEmail(e.target.value)} />
              </div>
              <div className="form_group">
                <input type="number" placeholder='Phone number' required onChange={e=>setEnterNumber(e.target.value)} />
              </div>
              <div className="form_group">
                <input type="text" placeholder='Country' required onChange={e=>setEnterCountry(e.target.value)} />
              </div>
              <div className="form_group">
                <input type="text" placeholder='City' required onChange={e=>setEnterCity(e.target.value)} />
              </div>
              <div className="form_group">
                <input type="number" placeholder='Postal code'required onChange={e=>setPostalCode(e.target.value)} />
              </div>
              <button className="addToCart_btn mb-5" >Payment</button>
            </form>
           
        </Col>
        <Col lg='4' md='6' sm='' className='mb-5'>
          <div className='checkout_bill'>
            <h6 className='d-flex align-items-center justify-content-between mb-3'>SubTotal : <span>${cartTotalAmount}</span></h6>
            <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping : <span>${shippingCost}</span></h6>
            <div className='checkout_total'>
              <h5 className='d-flex align-items-center justify-content-between'>Total : <span>${finalPrice}</span></h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Helmet>
}

export default Checkout