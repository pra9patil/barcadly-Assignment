import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import Private from "./components/PrivateRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refemail , setRefemail] = useState('');
 
  const addToCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar size={cart.length} setShow={setShow} />
              {show ? (
                <Home cart={cart} addToCart={addToCart} />
              ) : (
                <Cart cart={cart} setCart={setCart} refemail={refemail}  addToCart={addToCart} />
              )}
              {warning && (
                <div className="h-8 w-6/10 bg-gray-300 absolute z-10">
                  Item is already added to your cart
                </div>
              )}
            </>
          }
        />

        <Route path="/Admin" element={<Admin />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setRefemail={setRefemail}/>} />
        <Route
          path="/profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Profile refemail={refemail} />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Admin  />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
