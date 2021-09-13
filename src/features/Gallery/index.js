import React from 'react'
import PropTypes from 'prop-types'
import { SimpleSlider } from '../../ui/SimpleSlider'

import { Title, Text } from '../../ui'
import styles from './index.module.scss'
import imgOne from './img/fotoOne.jpg'
import imgmk2 from './img/fotomk2.jpg'
import imgTree from './img/fotoTree.jpg'
import imgDota from './img/fotoDota.jpg'
import imgDota2 from './img/fotoDota2.jpg'
import imgMarvel from './img/fotomarvel.jpg'
import imgMk from './img/fotomk.jpg'

export function Gallery(props) {
    const { title, text } = props

    const slides = [
        { img: imgOne, text: 'Бэтмен и Робин' },
        { img: imgmk2, text: 'Горо и Рептилия' },
        { img: imgTree, text: 'Чудо-женщина, Флеш и Супермен' },
        { img: imgDota, text: 'Лина и Кристалл Мэйден' },
        { img: imgDota2, text: 'Пак и Урса' },
        { img: imgMarvel, text: 'Ракета и Грут' },
        { img: imgMk, text: 'Райден, Саб-зиро и Скорпион' },
    ]

    return (
        <div className={styles.gallery}>
            <Title> {title} </Title>
            <Text>{text}</Text>
            <SimpleSlider slides={slides} />
        </div>
    )
}
Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
