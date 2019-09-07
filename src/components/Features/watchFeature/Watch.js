import React, { Component } from "react";

import tvimage from "./tvUI.png";
import mobileimage from "./mobile_tablet_UI.png";
import websiteimage from "./website_UI.png";
import styled from "styled-components";
import "./watch.scss";

function watchContent() {
  return (
    <section className="sectionWatch">
      <div className="columns">
        <div className="column">
          <h2 className="description">
            Watch TV shows and movies anytime, anywhere — personalized for
            <br />
            you.
          </h2>

          <button>JOIN FREE FOR A MONTH</button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <img src={tvimage} alt="Watch on your TV" />
          <h3>Watch on your TV</h3>
          <p className="pWatchDes">
            Smart TVs, PlayStation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>

        <div className="column">
          <br />
          <img src={mobileimage} alt="Watch on your Mobile, Tablet Device" />
          <h3>Watch instantly or download for later</h3>

          <p className="pWatchDes">
            Available on phone and tablet, wherever you go.
          </p>
        </div>

        <div className="column">
          <br />
          <img src={websiteimage} alt="Watch on your PC or MAC" />
          <h3>Use any computer</h3>

          <p className="pWatchDes">Watch right on Netflix.com.</p>
        </div>
      </div>
    </section>
  );
}

export default watchContent;
