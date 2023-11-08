
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Pagination } from 'swiper/modules';
import { dataPatients } from "../data/DataServices"
import Image from 'next/image';
type Props = {}

const patient = (props: Props) => {
    return (
        <>
            {
                dataPatients.map(patient =>
                (
                    <div key={patient.name}>
                        <Swiper

                            slidesPerView={'auto'}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper  cursor-pointer"
                        >
                            {patient.images.map(images =>
                            (
                                <SwiperSlide key={images}><Image src={images} className=' ' width={800} height={500} alt="image clinic"></Image></SwiperSlide>
                            ))}

                        </Swiper>
                    </div>

                ))
            }

        </>
    )
}

export default patient