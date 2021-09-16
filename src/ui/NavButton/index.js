import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function NavButton(props) {
    const { label, href } = props
    return (
        <a href={href} className={styles.link}>
            {label}
        </a>
    )
}

NavButton.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
