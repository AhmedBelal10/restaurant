import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "./../../../store/shopping-cart/cartSlice";
import "../../../styles/cart-item.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, image01, price, quantity, totalPrice } = item;

  const incItem = () => {
    dispatch(cartActions.addItem({ id, title, price, image01 }));
  };
  const decItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  };
  return (
    <ListGroupItem className="border-0 cart_item bigCart">
      <div className="cart_item-info d-flex gap-2">
        <img src={image01} alt="pro-img" />
        <div className="cart_product-info w-100 d-flex gap-4 justify-content-between align-items-center">
          <div>
            <h6 className="cart_product_title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart_product_price">
              {quantity}x <span>{totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between inc-dec-btn">
              <span className="increase_btn" onClick={incItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="dec_btn" onClick={decItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete_btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
