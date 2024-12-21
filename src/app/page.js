"use client";

import { useState, useEffect } from "react";
import "./page.css";
import Modal from "./Modal";

function HoverImage({ setHeading, setText, setIsModalOpen }) {
  const [hoverText, setHoverText] = useState(""); // State to store the text to show
  const [showSnake, setShowSnake] = useState(false); // State to toggle the PNG visibility for the snake
  const [showBookStroke, setShowBookStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [isLoading, setIsLoading] = useState(true); // State for managing the preloader visibility

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false)); // Set loading time to 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    );
  }
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
        onClick={() => {
          setHeading("About Us");
          setText(
            `For twelve long years, Snake has coiled in his hidden temple, silently observing the world and awaiting the dawn of the 'Year of the Snake' - a time destined for wisdom, transformation, and unrivalled fortune. Master of patience and strategy, Snake has subtly shaped the tides of the crypto world, aligning the bull run with the Year of the Snake.
As the embodiment of luck and cunning, Snake has imbued his temple with treasures of enlightenment and wealth. These gifts are now ready to bless those eho seek their fortune in the crypto realm.
As the temple doors swing open, Snake rises, poised to guide his followers into an era of boundless prosperity. Will you embrace the Snake’s power and claim your fortune, or will you let this once-in-a-lifetime opportunity slip away?`
          );
          setIsModalOpen(true); // Show the Modal on click
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
          width: "11.4%",
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
        onClick={() => {
          setHeading("How to Buy?");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
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
        onClick={() => {
          setHeading("Games");
          setText(
            `Play our wide variety of snake-themed Telegram games to earn exclusive rewards. Stay tuned - more games are coming soon.`
          );
          setIsModalOpen(true); // Show the Modal on click
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
          width: "3%", // Adjust width as necessary
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
      {/* Glow for Snowball effect */}
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
        onClick={() => {
          setHeading("FAQs");
          setText(
            `What is $SNAKE/,
$SNAKE is a cryptocurrency token inspired by the wisdom, luck, and cunning of the snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.

/,What Blockchain is $SNAKE on?/,
$SNAKE is built on the Ethereum blockchain.

/,Is there a Presale?/,
Detailed instructions are available in the Presale section

/,How do I buy the Presale?/,
Detailed instructions are available in the How to Buy section


/,What makes $SNAKE unique?/,
$SNAKE is not just a token - it’s an ecosystem. From interactive snake-themed games to exclusive token airdrops, $SNAKE combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.
/,`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => setHoverText("FAQs")}
        onMouseOut={() => setHoverText("")}
      />

      {/* Snowball SVG */}
      <img
        src="/assets/snowball.gif"
        alt="Snowball"
        className="bouncing-image"
        style={{
          position: "absolute",
          top: "20%", // Adjust position vertically
          left: "4%", // Adjust position horizontally
          transform: "translate(-50%, -50%)",
          width: "10%", // Adjust size
          pointerEvents: "none", // Ensures no hover interaction
        }}
      />

      {/* Snow Flakes Effect */}
      <div className="snowflake-container">
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
      </div>

      {/* Baloons GIF */}
      {/* Right 1 */}
      <img
        src="/assets/baloon1.gif"
        style={{
          position: "absolute",
          top: "2%", // Adjust the position as needed
          left: "27.5%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "10.5%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      {/* Right 2 */}
      <img
        src="/assets/baloon2.gif"
        style={{
          position: "absolute",
          top: "-2%", // Adjust the position as needed
          left: "22%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "10.5%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      {/* Left 1 */}
      <img
        src="/assets/baloon3.gif"
        style={{
          position: "absolute",
          top: "2%", // Adjust the position as needed
          left: "72%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "11%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      {/* Left 2 */}
      <img
        src="/assets/baloon4.gif"
        style={{
          position: "absolute",
          top: "-3%", // Adjust the position as needed
          left: "78%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "11%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
      {/* Bottom Fire */}
      <img
        src="/assets/BottomFire.gif"
        style={{
          position: "absolute",
          top: "60%", // Adjust the position as needed
          left: "5%", // Center horizontally
          transform: "translateX(-50%)", // Center the image
          width: "7%", // Adjust the size as needed
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
        onClick={() => {
          setHeading("Presale");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
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
        onClick={() => {
          setHeading("Tokenomics");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
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
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [heading, setHeading] = useState(""); // State to store the text to show
  const [text, setText] = useState(""); // State to store the text to show
  return (
    <>
      <div className="outer-container">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          Heading={heading}
          Text={text}
        />
        <div className="inner-container">
          <HoverImage
            setHeading={setHeading}
            setText={setText}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </>
  );
}
