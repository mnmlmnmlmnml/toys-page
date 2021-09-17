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
                    target='_blank'
                    rel='noreferrer'
                >
                    asd
                </a>
                <a
                    className={styles.telegram}
                    href='https://t.me/mnmlmnml'
                    target='_blank'
                    rel='noreferrer'
                >
                    asda
                </a>

                <a
                    className={styles.vk}
                    href='https://vk.com/mnmlmnmlmnmlmnml'
                    target='_blank'
                    rel='noreferrer'
                >
                    asd
                </a>
            </div>
        </div>
    )
}

Contacts.propTypes = {
    title: PropTypes.string.isRequired,
}
