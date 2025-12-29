"use client"
import React from 'react'

type Props = {
    variant?: 'default' | 'nav';
}

const ButtonContact = ({ variant = 'default' }: Props) => {
    const baseClasses = 'text-center inline-flex items-center justify-center gap-2 rounded-full font-semibold cursor-pointer transition'
    const variantClasses = variant === 'nav'
        ? 'h-11 px-5 bg-[#15A0F5] text-[#0b1220] shadow-[0_10px_25px_rgba(21,160,245,0.35)] hover:bg-[#2ab0ff]'
        : 'w-[11rem] h-[2.6rem] border border-[#c8ab88] bg-[#c8ab88] px-5 text-[#1b1916] uppercase tracking-wide hover:bg-[#dbc2a1]'

    return (
        <a onClick={() => { document.querySelector(`#contact`)?.scrollIntoView({ behavior: 'smooth', block: "start" }) }}
            className={`${baseClasses} ${variantClasses}`}>
            {variant === 'nav' && (
                <span className='flex h-8 w-8 items-center justify-center rounded-full bg-black/10'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className='h-4 w-4' fill="currentColor">
                        <path d="M2.5 4.5c0-1.1.9-2 2-2h3c.6 0 1.1.4 1.3.9l1 2.9c.2.6 0 1.2-.5 1.5l-1.7 1c1.3 2.4 3.2 4.3 5.6 5.6l1-1.7c.3-.5.9-.7 1.5-.5l2.9 1c.6.2.9.7.9 1.3v3c0 1.1-.9 2-2 2h-1c-8.3 0-15-6.7-15-15v-1z" />
                    </svg>
                </span>
            )}
            Reservar Hora
        </a>

    )
}
export default ButtonContact
