import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './index.module.scss'
import './slider.css'

export function SimpleSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const { slides } = props
    return (
        <div className={styles.slider}>
            <Slider {...settings}>
                {slides.map((item) => (
                    <div key={item.text} className={styles.item}>
                        <img className={styles.img} src={item.img} alt='foto' />
                        <div className={styles.desc}> {item.text}</div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

SimpleSlider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
}
