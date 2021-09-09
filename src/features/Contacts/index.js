import React from "react";
import styles from "./index.module.scss";

export function Contacts() {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>По всем вопросам обращаться:</h3>
      <div className={styles.social}>
        <a
          className={styles.instagram}
          href="https://www.instagram.com/mnmltoys/"
        ></a>
        <a className={styles.telegram} href="https://t.me/mnmlmnml"></a>
        <a className={styles.vk} href="https://vk.com/mnmlmnmlmnmlmnml"></a>
      </div>
    </div>
  );
}
