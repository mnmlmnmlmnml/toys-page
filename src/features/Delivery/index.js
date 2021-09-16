import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Title } from '../../ui'

export function Delivery(props) {
    const { title, text } = props
    return (
        <div className={styles.delivery}>
            <Title> {title} </Title>
            <>{text}</>
        </div>
    )
}

Delivery.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}
