import Link from 'next/link'
import React from 'react'

type Props = {}

const GeneraInformation = (props: Props) => {
    return (
        <div className="relative min-h-[20rem] flex flex-col justify-center items-center text-center md:text-start py-5">
            {/* Capa de fondo con opacidad */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>

            {/* Contenido de texto */}
            <h1 className="relative z-20 text-xl text-white ">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className=''>
                        <h3 className=' font-bold text-3xl pb-5 aqua-principal'>Agenda</h3>
                        <Link target='__blank' href={"https://wa.me/935886949?text=Hola,%20Estoy%20Interesado%20en%20tus%20servicios%20odontologicos%20"}
                            className='  text-white animate-spin '>Agenda aca ! </Link>
                    </div>
                    <div>
                        <h3 className=' font-bold text-3xl pb-5 aqua-principal'>Direccion</h3>
                        <h4>Provincial de Ovalle</h4>
                        <h4>Avda. Manuel Peñafiel # 1550</h4>
                    </div>
                    <div >
                        <h3 className=' font-bold text-3xl pb-5 aqua-principal'>Contacto</h3>
                        <h4>+569 3588 6949</h4>
                        <h4>correoreal@correo.com</h4>
                    </div>
                    <div className=''>
                        <h3 className=' font-bold text-3xl pb-5 aqua-principal'>Horario</h3>
                        <h4>Lunes-viernes</h4>
                        <h4>de 9:00am hasta 1:30pm</h4>
                        <h4>de 2:00pm hasta 6:30pm</h4>
                        <h4 className='pt-5'>Sabado</h4>
                        <h4>de 9:00am hasta 1:30pm</h4>

                    </div>
                </div>
            </h1>
            { }

            {/* Fondo de imagen con parallax */}
            <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-parallaxTWo "></div>
        </div>
    )
}

export default GeneraInformation