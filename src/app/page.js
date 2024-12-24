"use client";

import { useState, useEffect } from "react";
import "./page.css";
import Modal from "./Modal";
import Lottie from "lottie-react";

function HoverImage({ setHeading, setText, setIsModalOpen }) {
  const [hoverText, setHoverText] = useState(""); // State to store the text to show
  const [showSnake, setShowSnake] = useState(false); // State to toggle the PNG visibility for the snake
  const [showBookStroke, setShowBookStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [showCrystalStroke, setShowCrystalStroke] = useState(false); // State to toggle the PNG visibility for the book
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
      <a className="atag" href="https://twitter.com" target="_blank">
        <img className="socialimg1" src="/ttw.png" alt="Twitter"></img>
      </a>

      <a className="atag1" href="https://telegram.com" target="_blank">
        <img className="socialimg" src="/telegram.png" alt="Twitter"></img>
      </a>

      <a className="atagdex" href="https://dexscreener.com" target="_blank">
        <img className="socialimgdex" src="/dex.png" alt="Twitter"></img>
      </a>

      {/* Snake Part */}
      {/* Snake Animation */}
      <div
        style={{
          position: "absolute",
          top: "57%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "22%",
          cursor: "url(/assets/fire.png), auto",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 2, // Place above other elements
          opacity: showSnake ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          setHeading("About Us");
          setText(
            `For twelve long years, Snake has coiled in his hidden temple, silently observing the world and awaiting the dawn of the 'Year of the Snake' - a time destined for wisdom, transformation, and unrivalled fortune. Master of patience and strategy, Snake has subtly shaped the tides of the crypto world, aligning the bull run with the Year of the Snake.
As the embodiment of luck and cunning, Snake has imbued his temple with treasures of enlightenment and wealth. These gifts are now ready to bless those who seek their fortune in the crypto realm.
As the temple doors swing open, Snake rises, poised to guide his followers into an era of boundless prosperity. Will you embrace the Snake’s power and claim your fortune, or will you let this once-in-a-lifetime opportunity slip away?`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("ABOUT");
          setShowSnake(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowSnake(false); // Show animation on hover out
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Snake 2.json")} // Path to your JSON animation
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            borderRadius: "15px", // Apply same border radius as the container
          }}
        />
      </div>

      {/* Stroke Snake PNG */}
      <img
        className="snake"
        src="/assets/strokeSnake.png"
        alt="Stroke Snake PNG"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "13%",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showSnake ? 1 : 0, // Show PNG only when hovered
        }}
      />
      {/* TABLES */}
      <img
        className="table"
        src="/assets/table.png"
        alt="Table"
        style={{
          position: "absolute",
          top: "67%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "20%",
          zIndex: 5,
        }}
      />

      {/* Book Part */}
      {/* Book Animation */}
      <div
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "14%",
          zIndex: 2, // Place above other elements
          transition: "all 0.3s ease-in-out",
          opacity: showBookStroke ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          setHeading("How to Buy?");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("HOW TO BUY");
          setShowBookStroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBookStroke(false); // Show animation on hover out
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Book.json")}
          loop={true}
        />
      </div>

      {/* Book Stroke PNG */}
      <img
        src="/assets/bookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "53%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: "11%", // Adjust size if needed
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
      {/* Electricity Animation */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "88%",
          transform: "translate(-50%, -50%) rotate(45deg)", // Apply rotation (tilt) with 45-degree angle
          width: "6%", // Adjust width as necessary
          zIndex: 2,
          pointerEvents: "none", // Ensures no hover interaction
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/lightning.json")} // Path to your JSON animation
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>

      {/* Crystal Glow Animation */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: "100px",
          height: "100px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          opacity: showCrystalStroke ? 0 : 1, // Hide animation on hover
        }}
        onClick={() => {
          setHeading("FAQs");
          setText(
            ` What is $SNAKE/,
$SNAKE is a cryptocurrency token inspired by the wisdom, luck, and cunning of the snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.

/,What Blockchain is $SNAKE on?/,
$SNAKE is built on the Ethereum blockchain.

/,Is there a Presale?/,
Detailed instructions are available in the Presale section

/,How do I buy the Presale?/,
Detailed instructions are available in the How to Buy section

/,What makes $SNAKE unique?/,
$SNAKE is not just a token - it’s an ecosystem. From interactive snake-themed games to exclusive token airdrops, $SNAKE combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("FAQ's");
          setShowCrystalStroke(true); // Show stroke image
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowCrystalStroke(false); // Hide stroke image
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/ice 2.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>

      {/* Crystal Stroke PNG */}
      <img
        src="/assets/crystalStroke.png"
        alt="Crystal Stroke PNG"
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          transform: "translate(-50%, -50%)",
          width: "5.5%", // Adjust size if needed

          zIndex: 1, // Place behind the GIF
          opacity: showCrystalStroke ? 1 : 0, // Show PNG when hovered
        }}
      />

      {/* Bubble Bottles */}
      <div
        style={{
          position: "absolute",
          top: "58%",
          left: "3.5%",
          width: "100px",
          height: "100px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
          }}
        />
        <Lottie
          animationData={require("../../public/assets/Json/Liquid.json")} // Path to your JSON animation file
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
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

      {/* BOX */}

      {/* Crystal Glow Animation */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: "100px",
          height: "100px",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          opacity: showCrystalStroke ? 0 : 1, // Hide animation on hover
        }}
        onClick={() => {
          setHeading("FAQs");
          setText(
            ` What is $SNAKE/,
$SNAKE is a cryptocurrency token inspired by the wisdom, luck, and cunning of the snake, representing the Year of the Snake in the Chinese zodiac. It’s designed to bring fortune to its holders through a combination of utility, games, and rewards.

/,What Blockchain is $SNAKE on?/,
$SNAKE is built on the Ethereum blockchain.

/,Is there a Presale?/,
Detailed instructions are available in the Presale section

/,How do I buy the Presale?/,
Detailed instructions are available in the How to Buy section

/,What makes $SNAKE unique?/,
$SNAKE is not just a token - it’s an ecosystem. From interactive snake-themed games to exclusive token airdrops, $SNAKE combines community, fun, and utility. It also symbolizes the Year of the Snake, aligning with themes of wisdom and fortune.`
          );
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("FAQ's");
          setShowCrystalStroke(true); // Show stroke image
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowCrystalStroke(false); // Hide stroke image
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/ice 2.json")}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>

      {/* Crystal Stroke PNG */}
      <img
        src="/assets/crystalStroke.png"
        alt="Crystal Stroke PNG"
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          transform: "translate(-50%, -50%)",
          width: "5.5%", // Adjust size if needed

          zIndex: 1, // Place behind the GIF
          opacity: showCrystalStroke ? 1 : 0, // Show PNG when hovered
        }}
      />

      {/* Centered Hover Text */}

      {hoverText && <div className="hover-text">{hoverText}</div>}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
