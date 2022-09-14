import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import logo from "../../assets/images/res-logo.png";
import "../../styles/header.css";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const headerSticky = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header_shrink");
    } else {
      headerRef.current.classList.remove("header_shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <Link to='/home' className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </Link>
          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {link.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right icons  */}
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
