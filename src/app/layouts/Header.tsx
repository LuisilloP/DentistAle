"use client"
import React, { useState, useEffect } from 'react';
import toothIconLogo from "../../../public/icon.png"
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import ButtonContact from '../components/ButtonContact';
import { urls } from "../data/DataServices"
const Header = () => {

    const [open, setOpen] = useState(false);
    const [MouseMoveY, setMouseMoveY] = useState(0);

    useEffect(() => {

        const handleMouseMove = () => {
            setMouseMoveY(window.scrollY)
        }
        window.addEventListener('scroll', handleMouseMove)
    }, [])

    return (
        <div className={`w-full fixed md:px-10 px-6 top-0 left-0 z-50 bg-transparent py-4 md:py-5 transition duration-500 ease-out`}  >
            <div
                className={`fixed inset-0 z-30 bg-black/55 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            ></div>
            <div className={`max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-40 md:rounded-full md:border md:border-white/10 md:px-6 md:py-3 md:backdrop-blur-xl md:bg-gradient-to-r ${MouseMoveY == 0 ? 'md:from-[#141311]/70 md:via-[#1b1917]/80 md:to-[#141311]/70 md:shadow-[0_12px_30px_rgba(0,0,0,0.45)]' : 'md:from-[#141311]/95 md:via-[#1b1917]/95 md:to-[#141311]/95 md:shadow-[0_18px_45px_rgba(0,0,0,0.6)]'}`}>
                <div className='flex items-center justify-between gap-3 w-full md:w-auto md:justify-start rounded-full border border-white/15 md:border-transparent bg-[#141311]/90 md:bg-transparent px-4 py-2 md:px-0 md:py-0 shadow-lg md:shadow-none'>
                    <div className='cursor-pointer flex items-center gap-3 text-white md:text-[#1b1916]'>
                        <span className='flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#0f0e0c] border border-[#c8ab88]/60 shadow-lg'>
                            <Image src={toothIconLogo} className='h-6 w-6 md:h-7 md:w-7' alt="Logo Clinica Dental Mirador"></Image>
                        </span>
                        <span className='leading-tight'>
                            <span className='block text-[0.75rem] uppercase tracking-[0.32em] text-white/75 md:text-[#3c342c] font-semibold'>Clinica</span>
                            <span className='block font-title text-base sm:text-lg md:text-2xl text-white md:text-[#1b1916]'>Dental Mirador</span>
                        </span>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className='text-white cursor-pointer md:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-md'
                        aria-expanded={open}
                        aria-controls="site-nav"
                        aria-label={open ? "Cerrar menu" : "Abrir menu"}
                        role="button"
                    >
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                </div>
                <nav id="site-nav" className={`absolute md:static z-40 left-4 right-4 top-full mt-3 md:mt-0 w-auto bg-[#141311]/95 md:bg-transparent font-poppins px-5 py-5 md:px-0 md:py-0 rounded-[32px] md:rounded-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none backdrop-blur-2xl md:backdrop-blur-none transition duration-300 md:flex md:flex-1 md:justify-center ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'} md:opacity-100 md:translate-y-0 md:pointer-events-auto`}>
                    <ul className='flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-6 text-left md:text-center'>
                        {
                            urls.map((link, i) => (
                            <li key={i} className='md:my-0'>
                                <a className='cursor-pointer inline-flex items-center justify-between md:justify-center gap-3 md:gap-0 rounded-full px-4 py-3 md:px-4 md:py-2 w-full md:w-auto text-[0.95rem] sm:text-[1rem] md:text-[0.95rem] font-semibold normal-case tracking-[0.04em] md:tracking-[0.08em] text-white/90 md:text-white/80 bg-[#25231f] md:bg-transparent border border-white/10 md:border-transparent shadow-inner md:shadow-none transition hover:bg-[#2c2a25] md:hover:bg-white/10 md:hover:text-white md:hover:border-white/20'
                                    onClick={() => { document.querySelector(`#${link[0]}`)?.scrollIntoView({ behavior: 'smooth', block: "start" }); setOpen(false); }}
                                >{link[1]}</a>
                                </li>))
                        }
                    </ul>
                    <a
                        href="#contact"
                        className='md:hidden mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#15A0F5] px-4 py-3 text-[0.95rem] font-semibold tracking-[0.08em] text-[#0b1220] shadow-[0_10px_25px_rgba(21,160,245,0.35)] transition hover:bg-[#2ab0ff]'
                        onClick={() => setOpen(false)}
                    >
                        Reservar hora
                    </a>
                </nav>
                <div className=' hidden md:block '>
                    <ButtonContact variant="nav"></ButtonContact>
                </div>

            </div>
        </div >
    );
};

export default Header;
