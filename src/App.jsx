
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import GarmentsProduct from "./pages/GarmentsProduct";
import MetalsProduct from "./pages/MetalsProduct";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/layout/ScrollTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,    // Whether animation should happen only once - while scrolling down
      offset: 200,   // Offset (in px) from the original trigger point
    });
  }, []);


  return (
    <>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/garments" element={<GarmentsProduct />} />
        <Route path="/metals" element={<MetalsProduct />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
