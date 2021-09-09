import React from "react";
import styles from "./index.module.scss";

export function NavButton(props) {
  const { onClick, label, disabled, element } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-element={element}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
