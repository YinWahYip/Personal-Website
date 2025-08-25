// src/App.js
import React from "react";
import "./CSS/App.css";
import { Routes, Route } from "react-router-dom"; // <-- no Router here
import Navbar from "./Navbar";
import DocPage from "./Documentation/Documentation";
import ImageTrack from "./ImageTrack";

import pic1 from "./images/20250106_073524.jpg";
import pic2 from "./images/20250106_073846.jpg";
import pic3 from "./images/20250108_172931.jpg";
import pic4 from "./images/20250109_212819.jpg";
import pic5 from "./images/20241205_171619.jpg";
import pic6 from "./images/WechatIMG903.jpg";
import pic7 from "./images/WechatIMG904.jpg";
import pic8 from "./images/20250106_165938.jpg";

// ...
function Home() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  return (
    <>
      <div id="image-track">
        <h1>
          Adventures Peoples Places
        </h1>    <ImageTrack images={images} />
      </div>

      <header className="App-header">
        <h1>A personal website built by Yin Wah</h1>

      </header>

      <div className="projects-section">
        <h1>Projects / What I'm up to?</h1>
        <li>
          <strong>
            <a
              href="https://vuroom.vercel.app/"

            >
              VUROOM
            </a>
          </strong>
          – Interactive 3D dorm-room visualizer built with JavaScript and Three.js
        </li>
        <li><strong>QuarterMaster</strong> – Satirical Python text-based game about weapon inspections</li>
        <li><strong>Portfolio Website</strong> – Personal site (React + Vercel) showcasing my projects</li>

        <div className="accomplishment">
          <h3>Recent Accomplishment</h3>
          <p>🏆 DataFest Philly 2025 – Best Insight Award with my team of 5</p>
        </div>
      </div>






      {/* rest of your page content so vertical scroll still works */}
      <div style={{ height: 600 }} />
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
