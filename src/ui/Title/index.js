import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function Title({ children }) {
    return <h3 className={styles.title}>{children}</h3>
}
Title.propTypes = {
    children: PropTypes.string.isRequired,
}
