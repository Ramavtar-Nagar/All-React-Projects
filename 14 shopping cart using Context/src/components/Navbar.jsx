import React from "react";
import styles from "../styles/Total.module.css";

// import { useContext } from "react";
// import { itemContext } from "../itemContext";
import { useValue } from "../itemContext";

function Navbar() {
  // const {item, total, cart} = useContext(itemContext);
  const {item, total, clear} = useValue();
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={clear}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
