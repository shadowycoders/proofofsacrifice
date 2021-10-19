import React from "react";
import styles from "./Path.module.css";
import one from "../assets/1.png";

function Path() {
  return (
    <div className={styles.path}>
      <h1>The Path to the Open-Source Gods </h1>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
        </div>
        <div className={styles.gridContainer2}>
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
          <img src={one} style={{ height: "150px", with: "150px" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Path;
