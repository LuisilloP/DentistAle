"use client"
import React from 'react'
import phone from "../../../public/svg/phone.svg"
import email from "../../../public/svg/email.svg"
import maps from "../../../public/svg/maps.svg"
import Image from 'next/image'
type Props = {}

const BannerContact = (props: Props) => {

    const Data =
        [
            { name: "Direccion", image: maps, textOne: "Independencia 312", textTwo: "Ovalle, IV Region" },
            { name: "Correo", image: email, textOne: "correo@correo.com", textTwo: "correo@correo.com" },
            { name: "Telefono", image: phone, textOne: "9 1234 5678", textTwo: "9 8765 4321" }
        ]
    return (
        <div className='flex flex-col justify-between items-center md:flex-row md:bg-sky-100 md:py-5'>
            {Data.map((values, index) =>
            (<div key={index} className='flex gap-4 items-center text-zinc-500 text-xs min-w-[280px] md:flex-col md:gap-1 md:text-sky-700  '>
                <div className='min-w-[8rem] flex gap-2 items-center md:flex-col md:gap-1'>
                    <Image
                        src={values.image}
                        alt={values.name}
                        className='w-10 svg-color-fill'
                    ></Image>
                    <h3 className=' font-poppins font-thin text-black text-base md:font-bold md:text-sky-900'>{values.name}</h3>
                </div>
                <div>
                    <p className=''>{values.textOne}</p>
                    {values.textTwo != "" ? <p>{values.textTwo}</p> : ""}
                </div>
            </div>

            ))}

        </div>
    )
}

export default BannerContact