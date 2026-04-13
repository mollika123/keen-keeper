import React from 'react';
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
    color: "#333",
  },
  title: {
    fontSize: "80px",
    margin: 0,
  },
  text: {
    fontSize: "18px",
    margin: "10px 0 20px",
  },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Oops! Page not found</p>
      <button
        style={styles.button}
        onClick={() => window.location.href = "/"}
      >
        Go Home
      </button>
    </div>
    
  );
};

export default Error;