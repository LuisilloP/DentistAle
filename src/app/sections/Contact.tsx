import React from 'react'
import FormContact from '../components/FormContact'
import ImageTextContact from '../components/ImageTextContact'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <h2 className='relative z-20 text-4xl md:text-5xl text-white text-center font-bold'>Hablemos de tus <span className=' gray-text-three'>Necesidades</span>, Estamos Aquí para <span className=' gray-text-three'>Ayudarte</span>.</h2>

            <div className='grid grid-cols-1  lg:grid-cols-2 lg:items-center '>
                <div className='pt-10 order-1'>
                    <ImageTextContact></ImageTextContact>
                </div>
                <div className='pt-10'>
                    <h2 className='relative z-20 text-2xl md:text-3xl text-white  pb-5 font-bold '>Tu mensaje cuenta. Completa el formulario y <span className=' gray-text-three '>Contáctanos</span> !</h2>
                    <FormContact></FormContact>
                </div>
            </div>
        </div>
    )
}

export default Contact