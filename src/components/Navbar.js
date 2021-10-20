import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import logo from "../assets/SASCLogo.png";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -200;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  function openDiscord() {
    window.open('https://discord.gg/YeJGNJHf5z', '_blank');
  }
  function openTelegram() {
     window.open('https://t.me/shadowycoderscommunity', '_blank');
  }
  function openTwitter() {
    window.open('https://twitter.com/sascdao', '_blank');
  }
  return (
    <>
      {!isMobile ? (
        <header
          style={{ backgroundColor: "black" }}
          className="navbar fixed-nav-bar"
        >
          <div className="links">
            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/#Home"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <img src={logo} style={{ height: "51px" }} />
              </NavHashLink>
            </div>
            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/#About"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>About</p>
              </NavHashLink>
            </div>
            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/#ThePath"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>The Path</p>
              </NavHashLink>
            </div>

            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/#MassSacrifice"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>Mass Sacrifice</p>
              </NavHashLink>
            </div>
          </div>
          <div className="socials">
            <a onClick={openDiscord} hRef="#" className="button1">
              <img src={discord} />
            </a>
            <a onClick={openTwitter} href="#" className="button1">
              <img src={twitter} />
            </a>
            <button onClick={openTelegram} className="button2">Join Telegram</button>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
