import Image from 'next/image'
import React from 'react'
import dentistPrincipal from "../../../public/dentistPrincipal.webp"
import SubTitle from './SubTitle'
type Props = {}

const AboutMe = (props: Props) => {
    const olData = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quae", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quae", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quae", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quae", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur quae"]
    return (
        <div className='flex flex-col md:flex-row gap-12 '>
            <Image src={dentistPrincipal} className=' h-[30rem]  md:h-[45rem] w-[100%] md:w-[50%] min-h-[20rem]' alt='dentist'></Image>
            <div className=' pt-10 pl-10'>
                <h4 className='text-xs gray-text-three pb-4 '>Sobre mi</h4>
                <SubTitle classAlter='gray-text-three text-shadow-special-two ' text='ALEJANDRO BASIC VARAS'></SubTitle>

                <ul className='list-disc pt-6 px-6'>
                    {olData.map((value, i) =>
                    (
                        <li key={i} className='text-sm text-zinc-200 font-bold'>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutMe