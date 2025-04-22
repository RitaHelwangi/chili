import React from "react";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <div className="mainContainer">
      <div className="contentWrapper">
        <div className="contentContainer">
          <div className="welcomeMessageContainer">
            <div className="rowContainer">
              <div className="leftColumn">
                <div className="textContainer">
                  <p className="welcomeTitle">
                    Welcome to Chillis –<br />
                    <span className="welcomeSubtitle">
                      a taste of Italy close to home!{" "}
                    </span>
                  </p>
                  <p className="welcomeDescription">
                    At Chillis, you'll experience authentic Italian flavors,
                    crafted with love and tradition. <br />
                    Step into a place where every bite tells a story!
                  </p>
                </div>
              </div>
              <div className="rightColumn">
                <p className="openingHours">
                  Our opening hours:
                  <br />
                  Mon–Fri: 11:00 AM – 7:00 PM Sat: 1:00 PM – 11:00 PM Sun:
                  Closed
                </p>
              </div>
            </div>
          </div>
          <div className="ctaContainer">
            <img src="" className="ctaImage" alt="Logo"/>
            <p className="ctaText">
              Check out our menu! <br />
            </p>
            <button className="orderText">Order!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
