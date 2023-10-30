"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import SubTitle from '../components/SubTitle';
type Props = {}

const Galery = (props: Props) => {
    const data = ["https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/clinicImages%2Fclinic-one.jpg?alt=media&token=2dbe1782-1e16-4e3c-bdc4-2a355840f63d"
        , "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/clinicImages%2Fclinic-two.jpg?alt=media&token=295487a1-ce12-4751-9e15-5b51055e233b",
        "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/clinicImages%2Fclinic-three.jpeg?alt=media&token=261caf97-7943-4b72-a04e-d63de28b9971"]

    return (
        <div className=''>
            <h4 className='color-text-beige text-[14px] md:text-[13px] pb-5 lg:pb-0 md:pt-10 '>clinica</h4>
            <SubTitle classAlter='text-[2.5rem]' text='Conoce el establecimiento'  ></SubTitle>
            <div className='pt-10'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-[80vw] lg:h-[40vw] w-[90vw] lg:w-[80vw] lg:max-w-[80rem]"
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