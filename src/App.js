import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Services from "./pages/Service";
import Benefits from "./pages/Benefits";
import Blog from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
      <Route path="/benefits" element={<Benefits />} />
         <Route path="/blog" element={<Blog />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
