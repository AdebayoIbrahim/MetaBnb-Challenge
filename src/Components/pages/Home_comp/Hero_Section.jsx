import React from "react";
import "./Home.css";
import SearchBar from "./SearchBar";
export default function Hero({ images }) {
  // console.log(images);
  return (
    <React.Fragment>
      <div className="text">
        <div className="header-title">
          <h1 className="title">
            Rent A <span>Place</span> Away From <span>Home</span> in the
            <span> Metaverse</span>
          </h1>
        </div>
        <div className="header-text">
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div className="hero_images">
        {images.map(({ img, id }) => {
          return <img src={img} alt="images" key={id} />;
        })}
      </div>
    </React.Fragment>
  );
}
