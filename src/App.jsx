// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Home Page Sections
import Hero from "./pages/HomePage/Hero.jsx";
import Clients from "./pages/HomePage/Clients.jsx";
import Works from "./pages/HomePage/Works.jsx";  // ✅ Corrected Path
import About from "./pages/HomePage/About.jsx";
import Contact from "./pages/HomePage/Contact.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* ========== HOME PAGE ========== */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Clients />
              <Works />
              <About />
              <Contact />
            </>
          }
        />




      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
