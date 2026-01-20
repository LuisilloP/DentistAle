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
        "/images/clinica/clinica-01.webp",
        "/images/clinica/clinica-02.webp",
        "/images/clinica/clinica-03.webp",
        "/images/clinica/clinica-04.webp",
        "/images/clinica/clinica-05.webp",
        "/images/clinica/clinica-06.webp",
        "/images/clinica/clinica-07.webp",
        "/images/clinica/clinica-08.webp",
        "/images/clinica/clinica-09.webp",
        "/images/clinica/clinica-10.webp"
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
                        <SwiperSlide key={image}><Image src={image} className=' ' width={800} height={500} alt="Clinica dental Mirador"></Image></SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Galery
