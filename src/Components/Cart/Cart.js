import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../Store/Slices/CartSlice";
import Alert from "../../UI/Alert";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [ showSuccessAlert, setShowSuccessAlert] = useState(false);
  let total = 0;

  cartItems.forEach((itm) => {
    total += itm.price * 1 * itm.quantity;
  });

  const orderHandler = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false)
      dispatch(cartSlice.actions.clearCart())
    }, 1500);
  };

  return (
    <>
      {showSuccessAlert && <Alert classes="alert alert-success">Order submitted successfully!</Alert>}
      <div className="container">
        <div className="card mt-2">
          <h5 className="card-title m-2">Cart Items</h5>
          <div className="card-body">
            {cartItems.map((item) => {
              return (
                <div className="row" key={item.id}>
                  <div className="col-md-8">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">$ {item.price}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-3 text-end">
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            dispatch(
                              cartSlice.actions.decrementItemQuantity({
                                itemId: item.id,
                              })
                            )
                          }
                        >
                          -
                        </button>
                      </div>
                      <div className="col-md-5">
                        <input
                          disabled
                          type="number"
                          style={{
                            width: "100%",
                            textAlign: "center",
                            borderRadius: "5px",
                          }}
                          value={item.quantity}
                          min="1"
                        ></input>
                      </div>
                      <div className="col-md-3 text-start">
                        <button
                          className="btn btn-secondary"
                          onClick={() =>
                            dispatch(
                              cartSlice.actions.incrementItemQuantity({
                                itemId: item.id,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-md-8">
                <h4>Total Amount</h4>
              </div>
              <div className="col-md-4">
                <h4>$ {total.toFixed(2)}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10"></div>
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={orderHandler}>
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
