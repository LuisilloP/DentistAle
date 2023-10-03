import React from 'react'
import Service from './Service'
import DataServices from "./DataServices"
type Props = {}



const Services = (props: Props) => {
    const data = DataServices

    return (
        <div>
            <h4 className='text-xs text-sky-400 pb-4'>especialidades</h4>
            <h2 className='text-blue-900 font-poppins font-semibold text-4xl md:text-6xl text-shadow-special ' >Nuestros Servicios</h2>
            <div className=' pt-10 grid grid-col gap-5  md:grid-cols-2 lg:grid-cols-3 '>
                {data.map((value, index) =>
                (
                    <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                ))}
            </div>
        </div>
    )
}

export default Services