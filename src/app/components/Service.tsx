import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props =
    {
        image: StaticImageData,
        name: string,
        text: string,
    }

const Service = (props: Props) => {
    const { image, name, text } = props
    return (
        <div className=' p-5  rounded-lg min-h-[20rem] shadow-[rgba(56,_189,_248,_0.18)_0px_0px_16px] flex flex-col gap-4 '>
            <Image src={image} alt={`ìmage-${name}`} className='w-20'></Image>
            <h3 className='text-2xl font-bold text-sky-600 blue-two'>{name}</h3>
            <p className='text-zinc-600 text-sm'>{text}</p>
        </div>
    )
}

export default Service