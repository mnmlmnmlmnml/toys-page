import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function NavButton(props) {
    const { onClick, label, disabled, element } = props
    return (
        <button
            type='button'
            className={styles.button}
            onClick={onClick}
            data-element={element}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

NavButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
}
