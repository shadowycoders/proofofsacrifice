import React from "react";
import styles from "./massSacrifice.module.css";
function MassSacrifice() {
  return (
    <div className={styles.newsletter}>
      <h3>Subscribe to get notified about launch updates</h3>

      <form>
        <center>
          <div className={styles.btnContainer}>
            <input
              autoComplete="off"
              type="text"
              id="email"
              name="email"
              style={{ padding: "0.4rem" }}
            />
            <button className={styles.subscribe}>Subscribe</button>
          </div>
        </center>
      </form>
    </div>
  );
}

export default MassSacrifice;
