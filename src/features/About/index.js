import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Title, Text } from '../../ui'

export function About(props) {
    const { text, img, orientation = '', title } = props
    return (
        <div className={styles.about} data-orientation={orientation}>
            <div className={styles.text}>
                <Title> {title} </Title>
                <Text> {text}</Text>
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
