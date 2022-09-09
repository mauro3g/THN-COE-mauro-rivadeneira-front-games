import React, { useState } from 'react'
import { SLIDER_DATA } from '../../lib/constants/SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = () => {
    const [current, setCurrent] = useState<number>(0)
    const length = SLIDER_DATA.length

    const prevSlide = () => {
        setCurrent(current => {
            let next = current + 1
            if (next < length) {
                return next
            } else {
                return 0
            }
        })
    }

    const nextSlide = () => {
        setCurrent(current => {
            let prev = current - 1
            if (prev >= 0) {
                return prev
            } else {
                return length - 1
            }
        })
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='slider__left-arrow' onClick={prevSlide} elevation={5} size={40}/>
            <FaArrowAltCircleRight className='slider__right-arrow' onClick={nextSlide} elevation={5} size={40}/>
            {
                SLIDER_DATA.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slider__slide slider__slide--active' : 'slider-slide'}>
                            {index === current && (
                                <img src={slide.image} alt='slide' className='slider__image' />
                            )}
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ImageSlider