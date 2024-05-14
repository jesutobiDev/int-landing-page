import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import Image from 'next/image';
import cards from '../deck-data';
import {
    EffectCards,
    Pagination, Navigation
} from 'swiper';
import 'swiper/css/effect-cards';

const Slider = () => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={500}
            rotate={true}
            cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,

            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCards,
                 Pagination, Navigation
            ]}
            className="mySwiper"
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index} className={`${card.background} rounded-2xl p-6`}>
                    <div className='flex gap-4 items-base'>
                        <Image
                            src={card.icon}
                            alt="industry icon"
                            width={25}
                            height={15}
                        />
                        <p className="font-semibold text-2xl">{card.industry}</p>
                    </div>
                    <p className='font-normal text-base leading-[25px] my-4'>{card.text}</p>
                    {/* <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <Image
                                src="/blackarrow.svg"
                                alt="prev arrow"
                                width={25}
                                height={15}
                            />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <Image
                                src="/blackarrow.svg"
                                alt="next arrow"
                                width={25}
                                height={15}
                                className='rotate-180'
                            />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div> */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
