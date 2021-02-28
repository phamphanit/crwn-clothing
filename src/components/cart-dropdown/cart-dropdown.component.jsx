import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((x) => <CartItem key={x.id} item={x} />)
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          otherProps.dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });
const mapStateToProps = (state) => {
  return {
    // cartItems: state.cart.cartItems,
    cartItems: selectCartItems(state),
  };
};
export default withRouter(connect(mapStateToProps)(CartDropdown));
