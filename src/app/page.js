"use client";

import { useState, useEffect } from "react";
import "./page.css";
import Modal from "./Modal";
import Lottie from "lottie-react";
import BlinkingPoint from "./Blink";
import GlowingEffect from "./GlowingEffect";

function HoverImage({ setHeading, setText, setIsModalOpen }) {
  const [hoverText, setHoverText] = useState(""); // State to store the text to show
  const [showSnake, setShowSnake] = useState(false); // State to toggle the PNG visibility for the snake
  const [showBookStroke, setShowBookStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [isLoading, setIsLoading] = useState(true); // State for managing the preloader visibility
  const [showBoxStroke, setShowBoxStroke] = useState(false); // State to toggle the PNG visibility for the book
  const [showGallery, setShowGallery] = useState(false); // State to toggle the PNG visibility for the book
  const [width, setWidth] = useState(null); // Initialize state with current window width
  const [snakestroke, setsnakestroke] = useState(false);
  const [scrollstroke, setscrollstroke] = useState(false);
  const [BlackSnakeReturnStroke, setBlackSnakeStrokeReturn] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth); // Update width state when window is resized
    };

    window.addEventListener("resize", handleResize); // Add event listener for window resizing

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    };
  }, []);

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
          width: width <= 768 ? "0%" : "20%",
          zIndex: 5,
        }}
      />

      {/* Book Part */}
      {/* Book Animation */}
      <div
        className="responsive-div-book"
        style={{
          position: "absolute",
          top: "55.5%",
          left: "27%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "21%" : "14%",
          zIndex: 7, // Place above other elements
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
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="yellow" />
      </div>
      {/* ALMARI */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="green" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "56%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint />
      </div>
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="black" />
      </div>

      {/* BlackSnake */}
      <div
        style={{
          position: "absolute",
          top: "87%",
          left: "54%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="Pink" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "73%",
          left: "83%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 10, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <BlinkingPoint color="#07198f" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "31.5%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect />
      </div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "9%",
          transform: "translate(-50%, -50%)",
          width: "8%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF

          pointerEvents: "none",
        }}
      >
        <GlowingEffect color={"250, 235, 105"} />
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

      <div
        style={{
          position: "absolute",
          top: "81.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
          opacity: showBoxStroke ? 0 : 1, // Hide animation when hovered
        }}
        onClick={() => {
          setHeading("Tokenomics");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("TOKENOMICS");
          setShowBoxStroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowBoxStroke(false); // Show animation on hover out
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Treasure.json")}
          loop={true}
        />
      </div>

      <img
        src="/assets/sandookStroke.png"
        alt="Book Stroke PNG"
        style={{
          position: "absolute",
          top: "80.5%",
          right: "4%",
          transform: "translate(-50%, -50%)",
          width: "17%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          zIndex: 1, // Place behind the GIF
          opacity: showBoxStroke ? 1 : 1, // Show PNG only when hovered
        }}
      />
      {/* ALMARI */}
      <div
        style={{
          height: "55%",
          width: "12%",
          position: "absolute",
          top: "20%",
          left: "8%",
          zIndex: 1,
        }}
        onMouseOver={() => {
          setHoverText("FAQ's");
          setsnakestroke(true); // Hide animation on hover
        }}
        onMouseOut={() => {
          setHoverText("");
          setsnakestroke(false); // Show animation on hover out
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
      ></div>
      <img
        src="/assets/BlackSnake.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "49%",
          left: "17%",
          transform: "translate(-50%, -50%)",
          width: "13%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          height: "57%",
          opacity: snakestroke ? 1 : 0, // Show PNG only when hovered
        }}
      />
      {/* Table */}
      <div
        style={{
          height: "14%",
          width: "19%",
          position: "absolute",
          top: "60%",
          left: "40%",
          zIndex: 9,
        }}
        onClick={() => {
          setHeading("Presale");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("PRESALE");
          setShowGallery(true); //
        }}
        onMouseOut={() => {
          setHoverText("");
          setShowGallery(false);
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: width <= 768 ? "5.7%" : "15%",
          right: width <= 768 ? "-35%" : "-18%",
          transform: "translate(-50%, -50%)",
          width: width <= 768 ? "80%" : "70%",

          zIndex: 3,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Light.json")}
          loop={true}
        />
      </div>
      <div
        style={{
          position: "absolute",
          height: "20.5%",
          width: "20%",
          top: "77%",
          left: "40%",
          zIndex: 13,
        }}
        onClick={() => {
          setHeading("Games");
          setText(`NOT PROVIDED YET`);
          setIsModalOpen(true); // Show the Modal on click
        }}
        onMouseOver={() => {
          setHoverText("GAMES");
          setBlackSnakeStrokeReturn(true); //
        }}
        onMouseOut={() => {
          setHoverText("");
          setBlackSnakeStrokeReturn(false);
        }}
      ></div>
      <img
        src="/assets/BlackSnake2.png"
        alt="Almari PNG"
        style={{
          position: "absolute",
          top: "86.2%",
          left: "50.1%",
          transform: "translate(-50%, -50%)",
          width: "21.9%", // Adjust size if needed
          transition: "all 0.3s ease-in-out",
          height: "34%",
          opacity: BlackSnakeReturnStroke ? 1 : 0, // Show PNG only when hovered
          zIndex: 11,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "53.0%",
          right: "-2%",
          transform: "translate(-50%, -50%)",
          width: "7%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Smoke.json")}
          loop={true}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "47.2%",
          left: "36.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "47.1%",
          right: "24.7%",
          transform: "translate(-50%, -50%)",
          width: "12%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire.json")}
          loop={true}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "70.2%",
          left: "5.1%",
          transform: "translate(-50%, -50%)",
          width: "10.5%",
          zIndex: 3, // Place above other elements
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Lottie
          animationData={require("../../public/assets/Json/Fire_ball.json")}
          loop={true}
        />
      </div>

      {/* Electricity Part */}

      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "88%",
          transform: "translate(-50%, -50%) rotate(45deg)", // Apply rotation (tilt) with 45-degree angle
          width: width <= 768 ? "12%" : "6.8%",
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

      {/* Bubble Bottles */}
      <div
        style={{
          position: "absolute",
          top: "57.2%",
          left: "3.7%",
          width: "100px",
          height: "105px",
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

      {/* New Div 1 */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "64%",
          width: "10%",
          height: "35%",
          borderRadius: "10px",

          zIndex: 5,
          transition: "all 0.3s ease-in-out",
        }}
        // onClick={() => {
        //   setHeading("Presale");
        //   setText(`NOT PROVIDED YET`);
        //   setIsModalOpen(true); // Show the Modal on click
        // }}
        // onMouseOver={() => {
        //   setHoverText("PRESALE");
        //   setShowGallery(true); //
        // }}
        // onMouseOut={() => {
        //   setHoverText("");
        //   setShowGallery(false);
        // }}
      ></div>
      <img
        src="/assets/gallery.png"
        style={{
          position: "absolute",
          top: "30%",
          left: "68.5%",
          opacity: showGallery ? 0 : 0, // Show PNG when hovered
          height: "30%",
          transform: "translateX(-50%)", // Center the image
          width: "9%", // Adjust the size as needed
          zIndex: 1, // Ensure it's not on top of other elements
        }}
      />
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

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "4.5%",
          width: width <= 768 ? "130px" : "140px",
          height: width <= 768 ? "130px" : "140px",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
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

      {/* Centered Hover Text */}

      {hoverText === "ABOUT" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t1.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "PRESALE" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t2.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "FAQ's" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t3.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "TOKENOMICS" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t4.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "HOW TO BUY" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t5.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
      {hoverText === "GAMES" && (
        <div className="hover-text">
          {" "}
          <img
            src="/assets/t6.png"
            style={{
              width: "100%", // Make sure the image fits inside the div
              height: "100%",
              objectFit: "cover", // Ensures the image is contained inside the div
            }}
          />
        </div>
      )}
    </div>
  );
}
//PRESALE
//FAQ's TOKENOMICS
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
