import React from "react";
import styles from "./index.module.scss";

export function About(props) {
  const { text, img, orientation = "", title } = props;
  return (
    <div className={styles.about} data-orientation={orientation}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{text}</p>
      </div>
      <img className={styles.img} src={img} alt="photo"></img>
    </div>
  );
}
