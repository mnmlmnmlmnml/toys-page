import React from "react";
import { SimpleSlider } from "../../ui/Slider";
import styles from "./index.module.scss";
import imgOne from "./img/fotoOne.jpg";
import imgmk2 from "./img/fotomk2.jpg";
import imgTree from "./img/fotoTree.jpg";
import imgDota from "./img/fotoDota.jpg";
import imgDota2 from "./img/fotoDota2.jpg";
import imgMarvel from "./img/fotomarvel.jpg";
import imgMk from "./img/fotomk.jpg";

export function Gallery(props) {
  const slides = [
    { img: imgOne, text: "Бэтмен и Робин" },
    { img: imgmk2, text: "Горо и Рептилия" },
    { img: imgTree, text: "Чудо-женщина, Флеш и Супермен" },
    { img: imgDota, text: "Лина и Кристалл Мэйден" },
    { img: imgDota2, text: "Пак и Урса" },
    { img: imgMarvel, text: "Ракета и Грут" },
    { img: imgMk, text: "Райден, Саб-зиро и Скорпион" },
  ];

  return (
    <div className={styles.gallery}>
      <h3 className={styles.title}>Фото</h3>
      <p className={styles.text}>Примеры готовых изделий:</p>
      <SimpleSlider slides={slides} />
    </div>
  );
}
