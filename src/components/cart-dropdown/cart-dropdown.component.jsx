import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((x) => (
        <CartItem key={x.id} item={x} />
      ))}
    </div>
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, null)(CartDropdown);
