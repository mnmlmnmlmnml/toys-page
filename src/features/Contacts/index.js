import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Title } from '../../ui'

export function Contacts(props) {
    const { title } = props
    return (
        <div className={styles.contacts}>
            <Title> {title} </Title>
            <div className={styles.social}>
                <a
                    className={styles.instagram}
                    href='https://www.instagram.com/mnmltoys/'
                >
                    asd
                </a>
                <a className={styles.telegram} href='https://t.me/mnmlmnml'>
                    asda
                </a>

                <a className={styles.vk} href='https://vk.com/mnmlmnmlmnmlmnml'>
                    asd
                </a>
            </div>
        </div>
    )
}

Contacts.propTypes = {
    title: PropTypes.string.isRequired,
}
