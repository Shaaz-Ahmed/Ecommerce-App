import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart'; // Import Cart Component
import Checkout from './components/Checkout'; // Import Checkout component
import PaymentPage from './components/PaymentPage'; // Import PaymentPage component
import Registration from './components/Registration';  // Import the Registration Component
import Login from './components/Login';  // Import Login Component
import AboutUs from "./components/AboutUs";  // Import AboutUs component





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/register" element={<Registration />} /> {/* Add Registration route */}
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/about" element={<AboutUs />} />  {/* Add Route for AboutUs */}

      </Routes>
    </>
  );
}

export default App;
