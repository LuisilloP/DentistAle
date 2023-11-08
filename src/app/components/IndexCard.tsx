"use client"
import Image from 'next/image'
import React from 'react'
interface CardData {
    image: string,
    title: string,
    text: string,
    button: string,
    color?: string
    name: string
}
type Props =
    {
        data: CardData
    }

const indexCard = (props: Props) => {

    const { image, title, text, button, color, name } = props.data
    return (
        <div className={`
        hover:scale-105 transition ease-out delay-150
        cardIndex py-10 ${color != "other" ? "bg-[#151515]" : "bg-[#292929]"}
            lg:min-h-[33rem] 
         text-white rounded-sm text-center cursor-pointer clipath-card-special `}>
            <Image src={image} alt={title} className='image-card w-20 h-20 m-auto transition ease-in-out mt-10 '></Image>
            <h2 className='text-4xl  pt-10  '>{title}</h2>
            <p className='px-7 pt-10 leading-8 text-[15px] text-gray-300 '>{text}</p>
            <button
                onClick={() => {

                    document.querySelector(`#${name}`)?.scrollIntoView({ behavior: 'smooth', block: "start" })
                }}
                className="
            px-7 py-2
            relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group mt-10">
                {/* purple box */}
                <span className="w-0 h-0 rounded color-beige absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    {button}
                </span>
            </button>
        </div>
    )
}

export default indexCard