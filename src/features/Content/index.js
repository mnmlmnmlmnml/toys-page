import React from "react";
import styles from "./index.module.scss";
import { About } from "../About";
import { Gallery } from "../Gallery";
import { Delivery } from "../Delivery";
import { Contacts } from "../Contacts";
import img from "./img/foto.jpg";
import imgTwo from "./img/fototwo.jpg";
import imgThird from "./img/fotothird.jpg";

export function Content() {
  return (
    <div className={styles.content}>
      <section id="about" className={styles.section__first}>
        <About
          title="Добро пожаловать на мой сайт!"
          text="Меня зовут Даша. Вяжу игрушки по мотивам видеоигр и комиксов. Здесь вы можете увидеть мои готовые изделия. Порадуй себя или своего близкого человека
          необычным подарком."
          img={img}
        />
        <About
          title="Об изделиях:"
          text={
            <>
              Вязаное изделие,внутри наполненно холлофайбером. Размер изделия
              10-15 см в высоту. Переходите в{" "}
              <a className={styles.link} href="https://vk.com/mnmltoys">
                мою группу вконтакте
              </a>
              , там можно посмотреть все изделия и попробовать заказать
              что-нибудь новое.
            </>
          }
          img={imgTwo}
          orientation="reverse"
        />
        <About
          title="Цена:"
          text="Стоимость одной игрушки составляет 850р без учета доставки.
          Возможны скидки при покупке от 3-х и более изделий."
          img={imgThird}
        />
      </section>
      <section className={styles.section__second} id="gallery">
        <Gallery title="Фото" text="Примеры готовых изделий:" />
      </section>
      <section className={styles.section__third} id="delivery">
        <Delivery
          title="Покупка и Доставка:"
          text={
            <>
              1. Отправка физического товара осуществляется в течение 3 рабочих
              дней с момента оформления заказа. Товар доставляется Почтой России
              или компанией СДЭК до указанного почтового отделения. За срок
              доставки и отсутствие повреждений товара во время доставки
              отвечает Почта России/компания СДЭК. <br /> 2. Стоимость доставки
              напрямую зависит от веса и габаритов заказа, а также от
              удаленности вашего адреса от моего местонахождения.
              <span className={styles.desc}>
                При оформлении заказа напишите мне в личные сообщения.
              </span>{" "}
              Стоимость доставки рассчитывается автоматически по тарифам
              вышеуказанных служб. <br />
              3. Способы оплаты: перевод на банковскую карту, либо на
              киви-кошелек.
            </>
          }
        />
      </section>
      <section className={styles.section__fourth} id="contacts">
        <Contacts title="По всем вопросам обращаться:" />
      </section>
    </div>
  );
}
