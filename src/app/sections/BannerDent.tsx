import React from 'react'

type Props = {}

const BannerDent = (props: Props) => {

    return (
        // <div className={` flex items-center justify-center h-96  bg-fixed bg-parallax bg-cover bg-opacity-40 `}>
        //     <h1 className=' font-serif text-6xl text-white '><q className=' italic'>La clave de la confianza: una sonrisa saludable.</q></h1>
        // </div>

        <div className="relative h-96 flex flex-col justify-center items-center">
            {/* Capa de fondo con opacidad */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-40"></div>

            {/* Contenido de texto */}
            <h1 className="relative z-20 font-serif text-6xl text-white text-center font-bold">
                <q>La clave de la <span className='aqua-principal'>confianza</span>: una <span className='aqua-principal'>sonrisa saludable</span>.</q>
            </h1>

            {/* Fondo de imagen con parallax */}
            <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-parallax "></div>
        </div>

    )
}

export default BannerDent