import React from "react";
import "../homepage.css";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          width: "100%",
          backgroundColor: "#333",
          color: "white",
          padding: "1rem",
          textAlign: "center"
          
        }}
      >
        <h1>My Home Page</h1>
      </header>
      <main
        style={{ width: "80%", padding: "2rem", textAlign: "center", flex: 1 }}
      >
        <h2>Welcome to my employee application</h2>
        <img
          src="https://images.pexels.com/photos/6956352/pexels-photo-6956352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Placeholder"
        />
      </main>
      <footer
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#333",
          color: "white",
          padding: "1rem",
        }}
      >
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
};

export default HomePage;
