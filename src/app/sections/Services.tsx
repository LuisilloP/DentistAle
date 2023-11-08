import React from 'react'
import Service from '../components/Service'
import { dataGeneral, dataOrthodoncy, dataEsthetic, dataRehabilitation, dataFacial, dataBucal, dataEndodontic } from "../data/DataServices"
import SubTitle from '../components/SubTitle'
type Props = {}



const Services = (props: Props) => {
    const dataO = dataOrthodoncy
    const dataG = dataGeneral
    const dataS = dataEsthetic
    const dataR = dataRehabilitation
    const dataF = dataFacial
    const dataB = dataBucal
    const dataE = dataEndodontic
    return (
        <div>
            <h4 className='text-xs text-white pb-2'>Especialidades</h4>

            <SubTitle text='Servicios Odontológicos'></SubTitle>

            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text='Implantología Oral'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataO.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text=' Odontología General'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataG.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text=' Cirugía Bucal - Endodoncia'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataE.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                    {dataB.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text='Cirugía Estética Periodontal'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataS.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text='Rehabilitación Oral'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataR.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
            <div className=' pt-10'>
                <SubTitle classAlter='text-size-2rm text-white-custom' text='Cirugía Estética Periodontal'  ></SubTitle>
                <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                    {dataF.map((value, index) =>
                    (
                        <Service key={index + value.name} image={value.image} name={value.name} text={value.text} ></Service>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services