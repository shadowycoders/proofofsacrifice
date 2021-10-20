import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./massSacrifice.module.css";
function MassSacrifice() {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setClicked(true);
    axios
    .post(`https://proofofsacrifice.com/nft/subscribe`, {
      email,
    })
    .then((res) => {});

  }
  return (
    <div className={styles.newsletter}>
      <h3>Subscribe to get notified about launch updates</h3>

      <form onSubmit={handleSubmit}>
        <center>
          <div className={styles.btnContainer}>
            <input
              autoComplete="off"
              placeholder="Enter Email Adress"
              onChange={e => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              style={{ padding: "0.4rem" }}
            />
            {!clicked ? (
            <button className={styles.subscribe}>Subscribe</button>
            ) : (
            <div>
              You are a step closer to Salvation now. Open Source be with you.
            </div>
            )}
          </div>
        </center>
      </form>
    </div>
  );
}

export default MassSacrifice;
