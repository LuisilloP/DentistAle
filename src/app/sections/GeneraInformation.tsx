import Link from 'next/link'
import React from 'react'

type Props = {}

const GeneraInformation = (props: Props) => {
    return (
        <div className="relative min-h-[20rem] flex flex-col justify-center items-center text-center md:text-start py-5">
            {/* Capa de fondo con opacidad */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>

            {/* Contenido de texto */}
            <h1 className="relative z-20  text-white ">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-lg md:text-xl'>
                    <div className=''>
                        <h3 className=' font-bold text-2xl md:text-3xl pb-5 gray-text-three'>Agenda</h3>
                        <Link target='__blank' href={"https://wa.me/935886949?text=Hola,%20Estoy%20Interesado%20en%20tus%20servicios%20odontologicos%20"}
                            className=' text-white cursor-pointer    '>¡Agenda aca!</Link>
                    </div>
                    <div>
                        <h3 className=' font-bold text-2xl md:text-3xl pb-5 gray-text-three'>Direccion</h3>
                        <a
                            target='#_blank'
                            href='https://www.google.com/maps/@-30.5776062,-71.1883305,3a,75y,307.3h,90t/data=!3m7!1e1!3m5!1sh5Q2y8YirUAUzX-aLKAi-g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dh5Q2y8YirUAUzX-aLKAi-g%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D307.30414%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu'
                            className=' cursor-pointer  '>
                            <h4>Ovalle, Coquimbo, Chile.</h4>
                            <h4>Avda. Manuel Peñafiel #1480</h4>
                            <h4>Of. 315-316 B.Edificio Arenas</h4>
                        </a>
                    </div>
                    <div >
                        <h3 className=' font-bold text-2xl md:text-3xl pb-5 gray-text-three'>Contacto</h3>
                        <div className='flex flex-col'>
                            <a href="tel:+56935886949" className='cursor-pointer  '>+569 3588 6949</a>
                            <a href='mailto:a.bacic.v@gmail.com' className='cursor-pointer  '>a.bacic.v@gmail.com</a>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className=' font-bold text-2xl md:text-3xl pb-5 gray-text-three'>Horario</h3>
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