import React from "react";
import styles from "./index.module.scss";

export function Delivery(props) {
  const { title, text } = props;
  return (
    <div className={styles.delivery}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
