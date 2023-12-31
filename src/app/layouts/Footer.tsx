"use client"
import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
//images
import LogoF from "../../../public/logo.png"
import LogoFacebook from "../../../public/svg/FLogo.svg"
import LogoInstagram from "../../../public/svg/IgLogo.svg"
import { urls } from "../data/DataServices"
type Props = {}

const Footer = (props: Props) => {

    const ScrollToView = (nav: string) => {

        document.querySelector(`#${nav}`)?.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
    const dataNav = urls
    return (
        <footer className=' bg-neutral-900 min-h-[5rem] mg-20 pb-8 md:pb-0 '>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"} className=' flex z-50 font-title items-center text-2xl uppercase'> <Image alt='logo' className='w-10' src={LogoF}></Image> <p className='text-white'>Clinica Dental SB</p> </Link>
                    <div>
                        <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-5 md:pt-0">
                            {
                                dataNav.map(nav =>
                                (
                                    <li key={nav[0]}>
                                        <a className='duration-special ease-out hover:ease-in lg:px-0 transition cursor-pointer hover:text-[#00ffff]'
                                            onClick={() => ScrollToView(nav[0])}
                                        >{nav[1]}</a>
                                    </li>

                                ))
                            }
                        </ul>
                        <div className='pt-3 flex gap-3 items-center'>
                            <p className='  font-title text-white font-bold uppercase '>Síguenos en redes sociales</p>
                            <Link href={"https://www.instagram.com/clinicadental.sb/"} target='_blank'><Image src={LogoInstagram} width={27} height={27} alt='Logo Instagram' ></Image></Link>
                            <Link href={"https://web.facebook.com/people/Clinica-Dental-SB/61553382780456/?is_tour_dismissed=true"} target='_blank'><Image src={LogoFacebook} width={27} height={27} alt='Logo Facebook' ></Image></Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer