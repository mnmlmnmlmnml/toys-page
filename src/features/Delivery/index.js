import React from 'react'
import styles from './index.module.scss'

export function Delivery() {
    return (
        <div className={styles.delivery}>
            <h3 className={styles.title}>Покупка и Доставка</h3>
            <p className={styles.text}>
                1. Отправка физического товара осуществляется в течение 3
                рабочих дней с момента оформления заказа. Товар доставляется
                Почтой России или компанией СДЭК до указанного почтового
                отделения. За срок доставки и отсутствие повреждений товара во
                время доставки отвечает Почта России/компания СДЭК.
            </p>
            <p className={styles.text}>
                2. Стоимость доставки напрямую зависит от веса и габаритов
                заказа, а также от удаленности вашего адреса от моего
                местонахождения.{' '}
                <b>Для заказа напишите мне в личные сообщения в vk.</b>{' '}
                Стоимость доставки рассчитывается автоматически по тарифам
                вышеуказанных служб.
            </p>
            <p className={styles.text}>
                3. Способы оплаты: перевод на банковскую карту, либо на
                киви-кошелек.
            </p>
        </div>
    )
}
