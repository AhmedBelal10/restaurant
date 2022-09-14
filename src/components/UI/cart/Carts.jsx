import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart_item_list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">no item added to cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            SubTotal : <span>${totalAmount}</span>
          </h6>
          <button onClick={toggleCart}>
            {" "}
            <Link to="/checkout">Checkout</Link>{" "}
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
