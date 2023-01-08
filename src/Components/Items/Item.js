import React from "react";

import { useDispatch } from "react-redux";
import { cartSlice } from "../../Store/Slices/CartSlice";

export default function Item(props) {
  const dispatch = useDispatch();
  const { id, name, price, description } = props.item;

  const addToCartHandler = () => {
    dispatch(cartSlice.actions.addQuantityToCart());
    dispatch(
      cartSlice.actions.addToCart({
        id,
        name,
        price,
        description,
        quantity: 1
      })
    );
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="col-md-4">
              <h5 className="card-title">$ {price}</h5>
              <button className="btn btn-primary" onClick={addToCartHandler}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
