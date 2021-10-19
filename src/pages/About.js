import React from "react";
import styles from "./About.module.css";
import { useMediaQuery } from "react-responsive";

function About() {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      {isMobile ? (
        <>
          <p>
            The Super Army of Shadowy Coders is a spiritual sister DAO of
            Gitcoin, born to fund open-source technologies in crypto and beyond
            through the sale of NFT collections and games.
          </p>

          <p>
            We are not really a sect. We are just a bunch of believers in the
            sacred path to Open Source. And yes, maybe we are organized
            internally as a cult, and we act like a cult, but we are nice people
            and no goats will be sacrificed. Maybe we will burn a few Axies to
            some of our superior entities, that’s all.{" "}
          </p>

          <p>
            We believe in Open Source. The Cathedral and the Bazaar is one of
            our sacred texts (we have more than one). We want to fill the world
            with Open Source. And peace… yes, peace also.
          </p>
        </>
      ) : (
        <>
          <p>
            The Super Army of Shadowy Coders is a spiritual sister DAO of
            Gitcoin, born to fund open-source technologies in crypto and beyond
            through the sale of NFT collections and games. The first NFT
            collection will be a game of cards based on Conway´s Game of Life.
            You can access the first holy drop of cards by collecting sheep for
            the ritual sacrifice.
          </p>
          <p>
            {" "}
            We are not really a sect. We are just a bunch of believers in the
            sacred path to Open Source. And yes, maybe we are organized
            internally as a cult, and we act like a cult, but we are nice people
            and no goats will be sacrificed (maybe). All the DAO funds will
            support Gitcoin’s matching fund and the SASC grants.
          </p>
          <p>
            {" "}
            We believe in Open Source. The Cathedral and the Bazaar is one of
            our sacred texts (we have more than one). We want to fill the world
            with Open Source. And peace… yes, peace also.
          </p>
        </>
      )}
    </div>
  );
}

export default About;
