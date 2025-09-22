import React from "react";
import * as REACTDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landingPage/home/HomePage";
import SignUp from "./landingPage/signUp/SignUp";
import AboutPage from "./landingPage/about/AboutPage";
import ProductsPage from "./landingPage/products/ProductsPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from "./landingPage/NotFound";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";

const root = REACTDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);