"use client"
import React from 'react'
import ButtonContactShadow from './ButtonContactShadow'
import desntisPrincipal from "../../../public/dentistPrincipal.webp"
import Image from 'next/image'

type Props = {}

const TextImagePrincipal = (props: Props) => {
    return (
        <div className=' flex flex-col md:flex-row-reverse  '>
            <div className='w-[130vw] relative md:block right-10 md:right-0 md:w-[100vw]  flex'>
                <div className='md:min-w-[50vw] md:h-[50vw] bg-gradient-to-t from-[#002c6d] via-[#44C6E9] rounded-full'>
                    <Image src={desntisPrincipal} alt='image dentist' className='h-[90%] w-[70%] md:h-[100%] md:w-[80%] rounded-lg relative  left-14  md:left-8 '></Image>
                </div>
            </div>
            <div className='Principal-text flex flex-col gap-8 md:gap-16 px-3 pt-10 md:pt-0 '>
                <div className='flex flex-col gap-4 md:gap-16'>
                    <h3 className='text-[#2977D5] text-[14px] md:text-[16px]'>En la ciudad de Ovalle</h3>
                    <h1 className='text-blue-900  font-poppins font-semibold text-4xl md:text-6xl leading-[3.2rem]  md:leading-[4.5rem]'>Atención <span className='blue-two '>Odontológica</span> de primer nivel</h1>
                    <p className=' text-zinc-600 text-[14px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure quam dolore ullam eos, possimus quia repellat nulla ex placeat cupiditate velit amet rerum itaque incidunt similique sint, iste ad?</p>
                </div>
                <div className='flex gap-8  justify-between items-center '>
                    <ButtonContactShadow></ButtonContactShadow>
                    <a className=' underline ude underline-offset-8 text-zinc-600 decoration-zinc-600 hover:cursor-pointer text-sm md:text-base' >nuestros servicios</a>
                </div>
            </div>
        </div>
    )
}

export default TextImagePrincipal