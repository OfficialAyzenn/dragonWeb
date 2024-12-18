"use client";

import { useState } from "react";
import "./page.css";
function HoverImage() {
  const [hoverText, setHoverText] = useState(""); // State to store the text to show
  const [showSnake, setShowSnake] = useState(false); // State to toggle the PNG visibility for the snake
  const [showBookStroke, setShowBookStroke] = useState(false); // State to toggle the PNG visibility for the book

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
        cursor: "url(/assets/fire.png), auto", // Custom cursor
      }}
    >
      {/* Snake Part */}
      {/* FlexNew GIF (Snake Gif) */}
      <img
        className="snake"
        src="/assets/FlexNew2.gif"
        alt="Animated GIF"
        style={{
          position: "absolute",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "7%",
          cursor: "url(/assets/fire.png), auto",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 2, // Place above the PNG
          opacity: showSnake ? 0 : 1, // Hide GIF when hovered
        }}
        onMouseOver={() => {
          setHoverText("ABOUT");
          setShowSnake(true); // Show the PNG on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowSnake(false); // Hide the PNG on hover out
        }}
      />

      {/* Stroke Snake PNG */}
      <img
        className="snake"
        src="/assets/strokeSnake.png"
        alt="Stroke Snake PNG"
        style={{
          position: "absolute",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "11%",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showSnake ? 1 : 0, // Show PNG only when hovered
        }}
      />

      {/* Book Part */}
      {/* Book GIF */}
      <img
        src="/assets/book2.gif"
        alt="Book GIF"
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "7%",
          zIndex: 2, // Place above the PNG
          transition: "all 0.3s ease-in-out",
          opacity: showBookStroke ? 0 : 1, // Hide GIF when hovered
        }}
        onMouseOver={() => {
          setHoverText("HOW TO BUY");
          setShowBookStroke(true); // Show the PNG on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBookStroke(false); // Hide the PNG on hover out
        }}
      />

      {/* Book Stroke PNG */}
      <img
        src="/assets/bookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBookStroke ? 1 : 0, // Show PNG only when hovered
        }}
      />

      {/* Fire Part */}
      {/* bgFire GIF */}
      <img
        className="bgFire"
        src="/assets/bgFire000.gif"
        alt="Fire GIF"
        style={{
          position: "absolute",
          top: "42%",
          left: "37%",
          transform: "translate(-50%, -50%)",
          width: "9%",
          zIndex: 1,
        }}
      />

      {/* bgFire2 GIF */}
      <img
        className="bgFire2"
        src="/assets/bgFire000.gif"
        alt="Fire GIF 2"
        style={{
          position: "absolute",
          top: "42%",
          left: "63.5%",
          transform: "translate(-50%, -50%)",
          width: "9%",
          zIndex: 1,
        }}
        onMouseOver={() => setHoverText("GAMES")}
        onMouseOut={() => setHoverText("")}
      />

      {/* Electricity Part */}
      {/* Electricity GIF */}
      <img
        src="/assets/electricity.gif"
        alt="Electricity GIF"
        style={{
          position: "absolute",
          top: "60.5%",
          left: "88%",
          transform: "translate(-50%, -50%) rotate(45deg)", // Apply rotation (tilt) with 45-degree angle
          width: "2.5%", // Adjust width as necessary
          zIndex: 2,
          pointerEvents: "none", // Ensures no hover interaction
        }}
      />

      {/* Smoke and bubbles Part */}
      {/* Smoke Effect */}
      <div className="smoke"></div>
      <img
        src="/assets/smoke.gif"
        alt="Smoke GIF"
        style={{
          position: "absolute",
          top: "48%",
          left: "95.5%",
          transform: "translate(-50%, -50%)",
          width: "6%",
          zIndex: 1,
          pointerEvents: "none", // Ensures no hover interaction
        }}
      />

      {/* Bubbles Effect */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Glow for Snow ball effect */}
      {/* Glow Effect */}
      <div
        className="crystal-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(173,216,230,0.8), transparent)",
          borderRadius: "50%",
          boxShadow: "0 0 20px 10px rgba(0, 191, 255, 0.7)",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
        onMouseOver={() => setHoverText("FAQ")}
        onMouseOut={() => setHoverText("")}
      ></div>

      {/* Snow Flakes Effect */}
      <div className="snowflake-container">
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
      </div>

      {/* Baloons GIF */}
      <img
        src="/assets/baloon1.gif"
        style={{
          position: "absolute",
          top: "5%", // Adjust the position as needed
          left: "27.5%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "10.5%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      <img
        src="/assets/baloon2.gif"
        style={{
          position: "absolute",
          top: "5%", // Adjust the position as needed
          left: "72%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "11%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      {/* New Div 1 */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "40%",
          width: "20%",
          height: "10%",
          borderRadius: "10px",
          zIndex: 2,
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={() => setHoverText("PRESALE")}
        onMouseOut={() => setHoverText("")}
      ></div>

      {/* New Div 2 */}
      <div
        style={{
          position: "absolute",
          top: "75%",
          left: "70%",
          width: "15%",
          height: "20%",
          borderRadius: "10px",
          zIndex: 2,
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={() => setHoverText("TOKENOMICS")}
        onMouseOut={() => setHoverText("")}
      ></div>
      {/* Centered Hover Text */}

      {hoverText && <div className="hover-text">{hoverText}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <HoverImage />
        </div>
      </div>
    </>
  );
}
