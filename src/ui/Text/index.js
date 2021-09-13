import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function Text({ children }) {
    return <p className={styles.text}>{children}</p>
}
Text.propTypes = {
    children: PropTypes.string.isRequired,
}
