import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./Product";
import Example from "./Home";
import AllComponets from "./AllComponets";
import Register from "./Signup/Register";
import PersonalData from "./Signup/PersonalData";
import CartProvider from "./CartContext";
import Cart from "./Cart";

export default function WebRoutes() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/buyer" />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/buyer" element={<AllComponets />}>
            <Route index element={<Example />} />{" "}
            <Route path="pro" element={<Product />} />{" "}
            <Route path="cart" element={<Cart />} />{" "}
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
