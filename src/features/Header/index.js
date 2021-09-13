import React from 'react'
import styles from './index.module.scss'
import { NavButton } from '../../ui/NavButton'

export function Header() {
    function handleClick(e) {
        const { element } = e.target.dataset
        const node = document.getElementById(element)
        if (node) {
            node.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.sticky}>
                <h1 className={styles.title}>mnmltoys</h1>
                <div className={styles.list}>
                    <NavButton
                        element='about'
                        label='Главная'
                        onClick={handleClick}
                    />
                    <NavButton
                        element='gallery'
                        label='Галерея'
                        onClick={handleClick}
                    />
                    <NavButton
                        element='delivery'
                        label='Покупка и Доставка'
                        onClick={handleClick}
                    />
                    <NavButton
                        element='contacts'
                        label='Контакты'
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}
