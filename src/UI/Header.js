import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../Store/Slices/AuthSlice";
import { cartSlice } from "../Store/Slices/CartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  const logoutHandler = () => {
    dispatch(cartSlice.actions.clearCart())

    dispatch(authSlice.actions.logout());
  };

  const showCartHandler = () => {
    dispatch(cartSlice.actions.showCart())
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h2 className="navbar-brand p-2">My Shop</h2>

      <div>
        {isLoggedIn && cartQuantity > 0 && (
          <button className="btn btn-light m-2" onClick={showCartHandler}>
            Cart {cartQuantity}
          </button>
        )}
        {isLoggedIn && (
          <button className="btn btn-light m-2" onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
