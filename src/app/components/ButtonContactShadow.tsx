
import React from 'react'



const ButtonContactShadow = () => {

    return (
        <a
            onClick={() => { document.querySelector(`#contact`)?.scrollIntoView({ behavior: 'smooth', block: "start" }) }}
            className="relative inline-block text-lg group w-[136px] md:w-[169px] cursor-pointer">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-semibold tracking-[0.2em] uppercase leading-tight text-[#1b1916] transition-colors duration-300 ease-out rounded-full bg-[#c8ab88] border border-[#e6d2bb]">
                <span className="absolute inset-0 w-full h-full rounded-full bg-[#e7d3ba] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className={`relative text-xs md:text-base`}>Reservar Hora</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#c8ab88]/40 rounded-full group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-full"></span>
        </a>
    )
}

export default ButtonContactShadow
