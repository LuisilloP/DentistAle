"use client"
import React, { useState, useEffect } from 'react';
import toothIconLogo from "../../../public/logo.png"
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import ButtonContact from '../components/ButtonContact';
import { urls } from "../data/DataServices"
const Header = () => {

    const [open, setOpen] = useState(false);
    const [MouseMoveY, setMouseMoveY] = useState(0);

    useEffect(() => {

        console.log(MouseMoveY)
        const handleMouseMove = () => {
            setMouseMoveY(window.scrollY)
        }
        window.addEventListener('scroll', handleMouseMove)
    }, [])

    return (
        <div className={` w-full fixed  md:px-10 px-7 top-0 left-0 z-50 ${MouseMoveY == 0 ? 'py-5 bg-black  ' : ' shadow-md py-1 color-beige'} ease-out duration-500 `}  >
            <div className=' flex md:flex items-center justify-between'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <Image src={toothIconLogo} className='w-8' alt="icon"></Image>
                    <span className={`pl-1  ${MouseMoveY == 0 ? ' text-zinc-50' : "text-zinc-900"}`}>L Dev</span>
                </div>
                <div onClick={() => setOpen(!open)} className=' text-black cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon style={{ color: 'white' }} /> : <Bars3BottomRightIcon style={{ color: 'white' }} />
                    }
                </div>
                <ul className={` ${MouseMoveY == 0 ? ' ' : 'color-beige text-zinc-50 '} text-[16px] text-zinc-300 bg-black md:flex md:items-center font-poppins font-thin  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ease-out duration-500 ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        urls.map((link, i) => (
                            <li key={i} className='md:ml-8 md:my-0 my-7 '>
                                <a className=' cursor-pointer '
                                    onClick={() => { document.querySelector(`#${link[0]}`)?.scrollIntoView({ behavior: 'smooth', block: "start" }) }}
                                >{link[1]}</a>
                            </li>))
                    }
                </ul>
                <div className=' hidden md:block '>
                    <ButtonContact></ButtonContact>
                </div>

            </div>
        </div >
    );
};

export default Header;