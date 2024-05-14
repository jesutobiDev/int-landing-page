import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import Image from 'next/image';
import cards from '../deck-data';
import {EffectCards, Autoplay} from 'swiper';
import 'swiper/css/effect-cards';

const Slider = () => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={500}
            autoplay={{ delay: 10000,
                 disableOnInteraction: false, 
                }}
            rotate={true}
            cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 3,

            }}
            modules={[EffectCards, Autoplay]}
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
