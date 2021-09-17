import React from 'react'
import styles from './index.module.scss'
import { NavButton } from '../../ui/NavButton'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.sticky}>
                <h1 className={styles.title}>
                    <a className={styles.link} href='/'>
                        mnmltoys
                    </a>
                </h1>
                <div className={styles.list}>
                    <NavButton href='#about' label='Главная' />
                    <NavButton href='#gallery' label='Галерея' />
                    <NavButton href='#delivery' label='Покупка и Доставка' />
                    <NavButton href='#contacts' label='Контакты' />
                </div>
            </div>
        </div>
    )
}
