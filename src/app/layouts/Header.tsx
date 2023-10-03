"use client"
import React, { useState, useEffect } from 'react';
import toothIcon from "../../../public/tooth.png"
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import ButtonContact from '../components/ButtonContact';
const Header = () => {
    const urls = [['Home', 'Principal'], ['Stack', 'Habilidades'], ['Pages', 'Paginas'], ['Contact', 'Contacto']]
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
        <div className={` w-full fixed bg-white  md:px-10 px-7 top-0 left-0 z-50 ${MouseMoveY == 0 ? 'py-5  ' : ' shadow-md py-3'} ease-out duration-500 `}  >
            <div className=' flex md:flex items-center justify-between'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <Image src={toothIcon} className='w-8' alt="icon"></Image>
                    <span className=' pl-1 text-zinc-900'>L Dev</span>
                </div>
                <div onClick={() => setOpen(!open)} className=' text-black cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon className=' text-black' /> : <Bars3BottomRightIcon className='text-black' />
                    }
                </div>
                <ul className={` ${MouseMoveY == 0 ? ' ' : '  '} text-[14px] text-zinc-700 bg-white md:flex md:items-center font-poppins font-thin  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ease-out duration-500 ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        urls.map((link, i) => (
                            <li key={i} className='md:ml-8 md:my-0 my-7 '>
                                <a href={link[0]} className=' '>{link[1]}</a>
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