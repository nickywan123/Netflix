import React, { Component } from "react";
import "./footer.scss";
function Footer() {
  return (
    <footer>
      <br /> <br /> <br />
      <br />
      <br />
      <p className="footerparagraph">Questions? Contact us.</p>
      <ul>
        <li>
          <a className="link" href="https://help.netflix.com/en/node/41049">
            FAQ
          </a>
        </li>
        <li>
          <a className="link" href="https://help.netflix.com/en/">
            Help Center
          </a>
        </li>
        <li>
          <a className="link" href="https://help.netflix.com/en/node/412">
            Account
          </a>
        </li>
        <li>
          <a className="link" href="https://media.netflix.com/en/">
            Media Center
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.netflixinvestor.com/ir-overview/profile/default.aspx"
          >
            Investor Relations
          </a>
        </li>
        <li>
          <a className="link" href="https://jobs.netflix.com/">
            Jobs
          </a>
        </li>
        <li>
          <a className="link" href="https://devices.netflix.com/en/">
            Ways to Watch
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://help.netflix.com/en/legal/termsofuse"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a className="link" href="https://help.netflix.com/legal/privacy">
            Privacy
          </a>
        </li>
        <li>
          <a className="link" href="https://help.netflix.com/en/node/64187">
            Cookie Preferences
          </a>
        </li>
        <li>
          <a className="link" href="https://media.netflix.com/en/about-netflix">
            Corporate Information
          </a>
        </li>
        <li>
          <a className="link" href="https://media.netflix.com/en/contact-us">
            Contact us
          </a>
        </li>
        <li>
          <a className="link" href="https://fast.com/">
            Speed Test
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"
          >
            Netflix Originals
          </a>
        </li>
      </ul>
      <br />
      <p id="nicholas">MADE BY NICHOLAS</p>
    </footer>
  );
}

export default Footer;
