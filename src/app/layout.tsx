import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter, DM_Serif_Display } from 'next/font/google'
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import whatsappButton from "../../public/svg/whatsappButton.svg"
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  title: "Clinica Dental Mirador | Odontologia e implantologia en Ovalle",
  description: "Atencion odontologica integral en Ovalle. Implantologia, rehabilitacion oral y estetica con tecnologia moderna y trato cercano en Clinica Dental Mirador.",
  keywords: "Clinica Dental Mirador, Alejandro Bacic, dentista en Ovalle, implantologia en Ovalle, implantes dentales, rehabilitacion oral, odontologia estetica, ortodoncia, endodoncia, blanqueamiento dental, odontopediatria, salud bucal en Ovalle"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <body className={`${inter.variable} ${dmSerif.variable} ${inter.className}`}>
        <Link target='__blank' href={"https://wa.me/56927151566?text=Hola,%20Quiero%20agendar%20una%20evaluacion."} aria-label="Agendar por WhatsApp" className='w-16 fixed bottom-4 rounded-full right-4 z-50 cursor-pointer animation-pulse hover:opacity-80'><Image src={whatsappButton} alt="" className=' rounded-full '></Image></Link>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}

