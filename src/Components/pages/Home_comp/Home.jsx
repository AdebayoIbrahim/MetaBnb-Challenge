import React from "react";
import { heroImg } from "./image_data";
import { advCards } from "./image_data";
import Hero from "./Hero_Section";
import { Link } from "react-router-dom";
import { Adventure } from "./Adventure";
// import { heroNavImg } from "./image_data";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero images={heroImg} />
      </div>
      <div className="hero-nav">
        <li>
          <Link to="/" className="logo">
            MBToken
          </Link>
        </li>
        <li>
          <Link to="/" className="logo">
            MEATMASK
          </Link>
        </li>
        <li>
          <Link to="/" className="logo">
            OpeanSea
          </Link>
        </li>
      </div>
      <Adventure adventures={advCards} />
    </>
  );
};
export default Home;
