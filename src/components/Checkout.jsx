// src/components/Checkout.jsx
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.handleCart); // Fetch cart data from Redux

  // Function to calculate total price of the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <h1 className="display-6 fw-bolder text-center">Checkout</h1>
        <hr />
        {cartItems.length === 0 ? (
          <div className="col-12 text-center">
            <h2>Your cart is empty!</h2>
            <NavLink to="/products" className="btn btn-outline-dark">
              Go to Products
            </NavLink>
          </div>
        ) : (
          <>
            <div className="col-12">
              <h3>Order Summary</h3>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.title} - {item.qty} x ${item.price}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 text-end">
              <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
              <NavLink to="/payment" className="btn btn-success">
                Proceed to Payment
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
