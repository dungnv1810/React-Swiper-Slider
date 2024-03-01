import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from 'react-icons/hi'

import './style.css';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
const HomeSlider = () => {
    return (
        <>
            <Swiper
                className="wrapper"
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide'
                }}
                >
                <SwiperSlide>
                    <div className="images">
                        <img src="https://vinbacademy.vn/Uploads/qc/b3_6379883459919244730.png" alt=""/>
                    </div>
                    <div className="title-content">
                        <h3>More Luxury & tranding</h3>
                        <h3>Wood cup of tea</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus
                        </p>
                        <button className="btn">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src="https://vinbacademy.vn/Uploads/qc/b3_6379883459919244730.png" alt=""/>
                    </div>
                    <div className="title-content">
                        <h3>More Luxury & tranding</h3>
                        <h3>Wood cup of tea</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus
                        </p>
                        <button className="btn">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src="https://vinbacademy.vn/Uploads/qc/b3_6379883459919244730.png" alt=""/>
                    </div>
                    <div className="title-content">
                        <h3>More Luxury & tranding</h3>
                        <h3>Wood cup of tea</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            Quaerat, temporribus
                        </p>
                        <button className="btn">Shop Now</button>
                    </div>
                </SwiperSlide>
                <div className="button-next-slide">
                    <HiOutlineArrowNarrowRight/>
                </div>
                <div className="button-prev-slide">
                    <HiOutlineArrowNarrowLeft/>
                </div>
            </Swiper>
        </>
    )
}
export default HomeSlider