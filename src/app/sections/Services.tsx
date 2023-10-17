import React from 'react'
import Service from '../components/Service'
import { dataGeneral, dataOrthodoncy } from "../data/DataServices"
import SubTitle from '../components/SubTitle'
type Props = {}



const Services = (props: Props) => {
    const dataO = dataOrthodoncy
    const dataG = dataGeneral

    return (
        <div>
            <h4 className='text-xs color-text-beige pb-4'>Especialidades</h4>

            <SubTitle text='Servicios Odontologicos'></SubTitle>

            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm' text='Odontologia Implantologica'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataO.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm' text=' Odontologia General'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataG.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services