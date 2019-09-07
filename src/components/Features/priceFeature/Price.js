import React, { Component } from "react";
import { GoX } from "react-icons/go/";
import { GoCheck } from "react-icons/go/";
import "./price.scss";

function priceContent() {
  return (
    <section className="priceContent">
      <div className="wrapperPrice">
        <h2 className="priceDes">
          Choose one plan and watch everything on Netflix.
          <button id="joinButton4">JOIN FREE FOR A MONTH</button>
        </h2>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monthly price after free month ends on 5/5/20</td>
            <td>RM20.00</td>
            <td>RM32.00</td>
            <td>RM45.00</td>
          </tr>
          <tr>
            <td>HD available</td>
            <td>
              <GoX />
            </td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
          <tr>
            <td>Ultra HD available</td>
            <td>
              <GoX />
            </td>
            <td>
              <GoX />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
          <tr>
            <td>Screens you can watch on at the same time</td>
            <td>1</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Watch on your laptop, TV, phone and tablet</td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
          <tr>
            <td>Unlimited movies and TV shows</td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
          <tr>
            <td>Cancel anytime</td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
          <tr>
            <td>First month free</td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
            <td>
              <GoCheck />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default priceContent;
