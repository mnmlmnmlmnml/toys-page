import React from 'react'
import styles from './index.module.scss'
import { About } from '../About'
import { Gallery } from '../Gallery'
import { Delivery } from '../Delivery'
import { Contacts } from '../Contacts'
import img from './img/foto.jpg'
import imgTwo from './img/fototwo.jpg'
import imgThird from './img/fotothird.jpg'

export function Content() {
    return (
        <div className={styles.content}>
            <section id='about' className={styles.section__first}>
                <About
                    title={
                        <>
                            Добро пожаловать <br />
                            на мой сайт!
                        </>
                    }
                    text='Меня зовут Даша. Вяжу игрушки по мотивам видеоигр и комиксов. Здесь вы можете увидеть мои готовые изделия. Порадуй себя или своего близкого человека
          необычным подарком.'
                    img={img}
                />
                <About
                    title='Об изделиях:'
                    text={
                        <>
                            Вязаное изделие,внутри наполненно холлофайбером.
                            Размер изделия 10-15 см в высоту. Переходите в{' '}
                            <a
                                className={styles.link}
                                href='https://vk.com/mnmltoys'
                            >
                                мою группу вконтакте
                            </a>
                            , там можно посмотреть все изделия и попробовать
                            заказать что-нибудь новое.
                        </>
                    }
                    img={imgTwo}
                    orientation='reverse'
                />
                <About
                    title='Цена:'
                    text='Стоимость одной игрушки составляет 850р без учета доставки.
          Возможны скидки при покупке от 3-х и более изделий.'
                    img={imgThird}
                />
            </section>
            <section className={styles.section__second} id='gallery'>
                <Gallery />
            </section>
            <section className={styles.section__third} id='delivery'>
                <Delivery />
            </section>
            <section className={styles.section__fourth} id='contacts'>
                <Contacts />
            </section>
        </div>
    )
}
