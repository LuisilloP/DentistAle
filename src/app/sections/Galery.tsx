"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import SubTitle from '../components/SubTitle';
type Props = {}

const Galery = (props: Props) => {
    const data = [
        "https://dentalmiradorovalle.cl/Images/clinic/clinic1.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic2.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic3.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic4.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic5.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic6.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic7.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic8.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic9.jpeg",
        "https://dentalmiradorovalle.cl/Images/clinic/clinic10.jpeg"
    ]

    return (
        <div className=''>
            <h4 className='color-text-beige text-[14px] md:text-[13px]   md:pt-10 pb-2 '>clinica</h4>
            <SubTitle classAlter='text-[2.5rem]' text='Conoce el establecimiento'  ></SubTitle>
            <div className='pt-10'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-[80vw] lg:h-[40vw] w-[90vw] lg:w-[80vw] lg:max-w-[80rem] cursor-pointer"
                >
                    {data.map(image =>
                    (
                        <SwiperSlide key={image}><Image src={image} className=' ' width={800} height={500} alt="image clinic"></Image></SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Galery
