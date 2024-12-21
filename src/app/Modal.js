import React from "react";

const Modal = ({ isOpen, onClose, Heading, Text }) => {
  if (!isOpen) return null;

  if (Heading === "FAQs") {
    const questions = Text.split("/,"); // Split by delimiter '/,'

    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />
          <h1>{Heading}</h1>
          <hr />
          {questions.map((question, index) => (
            <div key={index} style={{ padding: 10 }}>
              {index % 2 != 0 && (
                <>
                  <p
                    style={{
                      fontWeight: "",
                      textAlign: "left",
                      paddingBottom: 5,
                    }}
                  >
                    {question.trim()}
                  </p>
                  <hr />
                </>
              )}
              {index % 2 == 0 && (
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                  {question.trim()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (
    Heading == "How to Buy?" ||
    Heading == "Tokenomics" ||
    Heading == "Games"
  ) {
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <img
            src="/back.png" // Replace with your image path
            alt="Close"
            style={styles.closeIcon}
            onClick={onClose}
          />
          <img
            src={
              Heading == "How to Buy?"
                ? "/htb.png"
                : Heading == "Tokenomics"
                ? "/tokenomics.png"
                : "/games.png"
            } // Replace with your image path
            alt="Close"
            style={styles.htbimg}
            onClick={onClose}
          />

          <h1>{Heading}</h1>
          <hr />

          <p
            style={{
              textAlign: "left",
              padding: 10,
              paddingLeft: 30,
              paddingRight: 30,
              lineHeight: 3,
            }}
          >
            {Text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img
          src="/back.png" // Replace with your image path
          alt="Close"
          style={styles.closeIcon}
          onClick={onClose}
        />
        <h1>{Heading}</h1>
        <hr />

        <p
          style={{
            textAlign: "left",
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            lineHeight: 3,
          }}
        >
          {Text}
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(5px)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "transparent",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    position: "relative", // Needed for positioning the close icon
    width: "80%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "-10%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  htbimg: {
    position: "absolute",
    bottom: "10%",
    left: "-10%",
    width: "270px",
    height: "230px",
    cursor: "pointer",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Modal;