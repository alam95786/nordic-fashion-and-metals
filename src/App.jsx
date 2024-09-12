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
import OurCategory from "./components/section/Category";
import CategoryProducts from "./pages/CategoryProducts";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
    });
  }, []);

  const categoriesData = [
    { id: 1, image: 'pic1', application: 'Tops', products: [] },
    { id: 2, image: 'pic2', application: 'Tops', products: [] },
    { id: 3, image: 'pic3', application: 'Kurtis', products: [] },
    { id: 4, image: 'pic4', application: 'Tops', products: [] }
  ];

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/garments" element={<GarmentsProduct />} />
        <Route path="/metals" element={<MetalsProduct />} />
        <Route path="/category" element={<OurCategory data={categoriesData} />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
