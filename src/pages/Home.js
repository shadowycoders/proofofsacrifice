import React from "react";
import About from "./About";
import Path from "./Path";
import styles from "./Home.module.css";
import sheep from "../assets/sheep.jpeg";
import { useMediaQuery } from "react-responsive";
import Timer from "../components/Timer";
import MassSacrifice from "./MassSacrifice";
function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  return (
    <div className={styles.main}>
      <section id="Home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Behold the Sheep A ritual begins</h1>
            <p>
              Gather your sheep for it is the holy day of November 1st. Winter
              is coming and the dead come back to our wordly abode to meet their
              heirs. It’s time to perform the ritual sacrifice of the sheep and
              satisfy our Open Source ancestors.
            </p>
          </div>
          {isMobile && (
            <div className={styles.sheepImage}>
              <img src={sheep} alt="" style={{ height: "15rem" }} />
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button className={styles.btnPink}>Claim your Sheep </button>
            <button className={styles.btnGray}>View all Sheep</button>
          </div>
        </div>
        {!isMobile ? (
          <div className={styles.sheepImage}>
            <img src={sheep} alt="" style={{ height: "20rem" }} />
          </div>
        ) : (
          ""
        )}
      </section>

      <section id="About">
        <div>
          <About />
        </div>
      </section>

      <section id="ThePath">
        <div>
          <Path />
        </div>
      </section>

      <section id="MassSacrifice">
        <div>
          <MassSacrifice />
        </div>
      </section>
    </div>
  );
}

export default Home;
