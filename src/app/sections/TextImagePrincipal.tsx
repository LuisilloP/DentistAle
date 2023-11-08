"use client"
import React from 'react'
import ButtonContactShadow from '../components/ButtonContactShadow'
import thooths from "../../../public/thooths.jpg"
import inferior from "../../../public/inferior.jpg"
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const TextImagePrincipal = (props: Props) => {

    const variantsConfig = (directionX: number) => {
        return {
            hidden: { opacity: 0, y: directionX },
            visible: { opacity: 1, y: 0 }
        }
    }
    return (

        <div className=' flex flex-col md:flex-row-reverse max-w-7xl m-auto pt-40 pb-20 '>
            < div className='relative md:block md:w-[100vw] flex flex-col' >
                <motion.div

                    variants={variantsConfig(-50)}
                    initial="hidden"
                    animate={'visible'}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Image src={thooths} alt='dientes'></Image>
                </motion.div >
                <motion.div

                    variants={variantsConfig(50)}
                    initial="hidden"
                    animate={'visible'}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <Image src={inferior} alt='dientes'></Image>
                </motion.div >
            </div>
            <div className='Principal-text flex flex-col gap-8 md:gap-16 px-3 pt-10 md:pt-0 '>
                <div className='flex flex-col gap-4 md:gap-16'>
                    <h3 className='text-white    text-[14px] md:text-[13px]'>En la ciudad de Ovalle</h3>
                    <h1 className='color-text-beige font-poppins font-semibold text-4xl md:text-6xl leading-[3.2rem]  md:leading-[4.5rem]'>Atención <span className='text-color-beige'>Odontológica</span> de primer nivel</h1>
                    <p className=' text-zinc-100 text-[15px] '>Un dentista en Ovalle, en sintonía con las inquietudes y necesidades de nuestros pacientes. Adoptamos un enfoque integral en la atención dental y proporcionamos tratamientos que se centran en resultados a largo plazo.<br></br><br></br>Nuestra clínica está comprometida en abordar la ansiedad dental al crear un ambiente relajante y al destacar la experiencia y precisión de nuestros odontólogos estéticos. Encuentra la sonrisa que exprese tu bienestar.</p>
                </div>
                <div className='flex gap-8  justify-between items-center '>
                    <ButtonContactShadow></ButtonContactShadow>
                    <a
                        onClick={() => { document.querySelector(`#services`)?.scrollIntoView({ behavior: 'smooth', block: "start" }) }}
                        className=' underline ude underline-offset-8 text-zinc-200 decoration-zinc-600 hover:cursor-pointer text-sm md:text-base' >nuestros servicios</a>
                </div>
            </div>
        </div >
    )
}

export default TextImagePrincipal