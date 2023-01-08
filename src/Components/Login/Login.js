import React from "react";
import { useDispatch } from 'react-redux';
import { authSlice } from '../../Store/Slices/AuthSlice';

export default function Login() {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authSlice.actions.login());
  };

  return (
    <form className="p-2">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2" onClick={loginHandler}>
        Login
      </button>
    </form>
  );
}
