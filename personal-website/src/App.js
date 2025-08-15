// src/App.js
import React from "react";
import "./CSS/App.css";
import { Routes, Route } from "react-router-dom"; // <-- no Router here
import Navbar from "./Navbar";
import DocPage from "./Documentation/Documentation";
import ImageTrack from "./ImageTrack";

import pic1 from "./images/20241205_171619.jpg";
import pic2 from "./images/20250106_073524.jpg";
import pic3 from "./images/20250106_073846.jpg";
import pic4 from "./images/20250106_165938.jpg";
import pic5 from "./images/20250108_172931.jpg";
import pic6 from "./images/WechatIMG903.jpg";
import pic7 from "./images/WechatIMG904.jpg";
import pic8 from "./images/20250109_212819.jpg";

function Home() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <>
      <header className="App-header">
        <p>A portfolio made by Yin Wah</p>
        For you
      </header>

      <section className="image-track-wrapper">
        <ImageTrack images={images} />
      </section>

      <div style={{ height: 1200 }} /> {/* demo spacer to prove page scroll works */}
    </>
  );
}


export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Ensure <BrowserRouter> wraps <App /> in src/index.js */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<DocPage />} />
      </Routes>
    </div>
  );
}
