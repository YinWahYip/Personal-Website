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
          Adventures 
          Peoples <br />
          Places
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
              target="_blank"
              rel="noopener noreferrer"
              className="vuroom-link"
            >
              🛏️ VUROOM
            </a>
          </strong>
          <br></br>
          &emsp;  &emsp;An interactive 3D dorm-room visualizer built with JavaScript, Three.js, and Blender, giving incoming Villanova students a way to explore residence halls virtually.
        </li>

        <li><strong>🎮 QuarterMaster:</strong>
          <br></br>
          &emsp;  &emsp;A satirical, text-based Python game where players inspect bizarre weapons for approval, blending humor with simple mechanics.
        </li>

        <li>
          <strong>☁️ AWS Projects: </strong>
          <br></br>
          &emsp;  &emsp;Learning and deploying cloud-based applications with AWS services, exploring EC2, S3, and Lambda to build scalable backends.
        </li>
        <li>
          <strong>This website! </strong>
          Personal site (React + Vercel) showcasing my projects, myself, and some other... interesting things, I'd hope
        </li>


        <div className="accomplishment">
          <h3>Recent Accomplishment</h3>
          <p>🏆 DataFest Philly 2025 – Best Insight Award with my team of 5</p>
          <p>
            Analyzed a 200k-entry leasing dataset using regression, clustering, and decision trees
            to uncover actionable insights for the client.
          </p>
        </div>

        <div className="links-section">
          <h3>Connect With Me</h3>
          <div className="links-icons">
            <a
              href="https://github.com/YinWahYip"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yin-wah-yip"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>


      </div>
      {/* final div, don't touch */}






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
