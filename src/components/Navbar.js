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
                to="/Home/#Home"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <img src={logo} style={{ height: "51px" }} />
              </NavHashLink>
            </div>
            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/Home/#About"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>About</p>
              </NavHashLink>
            </div>
            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/Home/#ThePath"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>The Path</p>
              </NavHashLink>
            </div>

            <div className="navbar__item">
              <NavHashLink
                smooth
                to="/Home/#MassSacrifice"
                scroll={(el) => scrollWithOffset(el)}
                className="text-link"
              >
                <p>Mass Sacrifice</p>
              </NavHashLink>
            </div>
          </div>
          <div className="socials">
            <button className="button1">
              <img src={discord} />
            </button>
            <button className="button1">
              <img src={twitter} />
            </button>
            <button className="button2">Join Telegram</button>
          </div>
        </header>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
