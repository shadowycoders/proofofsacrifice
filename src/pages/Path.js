import React from "react";
import styles from "./Path.module.css";
import pray from "../assets/Pray.png";
import sheep from "../assets/RoadmapSheep.png";
import sacrifice from "../assets/Sacrifice.png";
import ragnarok from "../assets/Ragnarok.png";
import CoNFTway from "../assets/CoNFTway.png";
import drinks from "../assets/Drinks.png";

function Path() {
  return (
    <div className={styles.path}>
      <h1>The Path to the Open-Source Gods </h1>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.one}>
            <img src={pray} style={{ height: "60px" }} />
            <h2>Pray to the Gods</h2>
            <p>Complete the tasks assigned to you</p>
          </div>
          <div className={styles.three}>
            <img src={sacrifice} style={{ height: "60px" }} />
            <h2>Join the ritual sacrifice</h2>
            <p>On November 1st, sacrificie your sheep</p>
          </div>
          <div className={styles.five}>
            <img src={ragnarok} style={{ height: "60px" }} />
            <h2>Ragnarock of NFTs</h2>
            <p>Hunting season is here. Battle your NFT cards.</p>
          </div>
        </div>
        <div className={styles.gridContainer2}>
          <div className={styles.two}>
            {" "}
            <img src={sheep} style={{ height: "60px" }} />
            <h2>Gather your Sheep </h2>
            <p>Collect a sheep NFT for the ritual</p>
          </div>
          <div className={styles.four}>
            <img src={CoNFTway} style={{ height: "60px" }} />
            <h2>Mint the first CoNFTway</h2>
            <p>Access the NFTs for The CoNFTway Game of Life</p>
          </div>
          <div className={styles.six}>
            <img src={drinks} style={{ height: "60px" }} />
            <p>Rejoice! Drink the Gods' nectar as it drops from the sky</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Path;
