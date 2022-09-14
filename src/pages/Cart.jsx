import React from "react";
import CommonSection from "./../components/UI/common-section/CommonSection";
import Helmet from "./../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "./../store/shopping-cart/cartSlice";
import { Container, Row, Col } from "reactstrap";
import "../styles/cart-page.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length !== 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h5 className="text-center">No items in the cart</h5>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal : $
                  <span className="cart_subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculated at checkout</p>
                <div className="Cart_page_btn">
                  <button className="addToCart_btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart_btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart_img_box">
        <img src={image01} alt="cart-img" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}X</td>
      <td className="text-center cart_item_del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};
export default Cart;
