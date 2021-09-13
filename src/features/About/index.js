import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export function About(props) {
    const { text, img, orientation = '', title } = props
    return (
        <div className={styles.about} data-orientation={orientation}>
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{text}</p>
            </div>
            <img className={styles.img} src={img} alt='' />
        </div>
    )
}

About.propTypes = {
    text: PropTypes.element,
    img: PropTypes.string,
    orientation: PropTypes.string,
    title: PropTypes.string,
}

About.defaultProps = {
    text: '',
    img: '',
    orientation: 'right',
    title: '',
}
