import React, { Component } from "react";

import "./CancelFeature.scss";

import CancelImage from "./cancel.png";
import styled from "styled-components";

function CancelFeature() {
  return (
    <section>
      <div className="divstyle">
        <div className="wrapper">
          <h2 id="textfeature">
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </h2>

          <button>JOIN FREE FOR A MONTH</button>
        </div>

        <img src={CancelImage} alt="cancel subscription anytime" />
      </div>
    </section>
  );
}

export default CancelFeature;
