import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../redux/action"; // Action to delete an item from the cart
import { NavLink } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart); // Fetch cart data from Redux
    const dispatch = useDispatch();

    // Function to handle item removal from the cart
    const removeFromCart = (product) => {
        dispatch(delCart(product));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
    };

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <h1 className="display-6 fw-bolder text-center">Shopping Cart</h1>
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
                            <div className="row">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="col-md-6 mb-4">
                                        <div
                                            className="card d-flex flex-row"
                                            style={{
                                                width: "100%", // Ensure card takes full width available
                                                height: "200px",
                                                borderRadius: "10px",
                                                display: "flex",
                                                flexDirection: "row",
                                                overflow: "hidden", // Hide overflow content
                                            }}
                                        >
                                            <div
                                                className="card-body d-flex flex-column justify-content-between"
                                                style={{ flex: 1, display: "flex", flexDirection: "column" }}
                                            >
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">
                                                    ${item.price} x {item.qty}
                                                </p>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => removeFromCart(item)}
                                                    style={{
                                                        marginTop: "auto", // Pushes the button to the bottom
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <img
                                                src={item.image}
                                                className="card-img-right"
                                                alt={item.title}
                                                style={{
                                                    width: "150px",
                                                    height: "auto",
                                                    objectFit: "contain",
                                                    borderRadius: "0 10px 10px 0",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-12 text-end">
                            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
                            <NavLink to="/checkout" className="btn btn-success">
                                Proceed to Checkout
                            </NavLink>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
