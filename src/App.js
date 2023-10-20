import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Register } from './components/Register/Register';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
