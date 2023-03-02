import React from "react";
import { rating } from "./image_data";

export const Adventure = ({ adventures }) => {
  return (
    <React.Fragment>
      <div className="adventures">
        <div className="header_Text">
          <h1>Inspiration For Your Next Adventure</h1>
        </div>
        <div className="adventures_cards">
          {adventures
            .map(({ img }, index) => {
              return (
                <div className="border" key={index}>
                  <img src={img} alt="card" />
                  <div className="desc_cont">
                    <p className="desc">Desert King</p>
                    <p className="desc">1MBT per night</p>
                    <p className="desc">2345km away</p>
                    <p className="desc">available for 2weeks today</p>
                  </div>
                  <div className="rating">
                    {rating.map(({ star }, index) => {
                      return <img src={star} alt="rating" key={index} />;
                    })}
                  </div>
                </div>
              );
            })
            .slice(1, adventures.length)}
        </div>
      </div>
    </React.Fragment>
  );
};

// Adventure.pro;
