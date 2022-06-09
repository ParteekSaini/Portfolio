import React from "react";
import Footer from "./Footer/Footer";
import "./Home.css";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
