import React from 'react'
import Patients from '../components/Patients'
import SubTitle from '../components/SubTitle'

type Props = {}

const MyPatients = (props: Props) => {
    return (
        <div className='pt-14'>
            <div className='max-w-7xl m-auto px-3 '>
                <h4 className='text-xs text-white pb-2'>Conoce a nuestros</h4>
                <SubTitle classAlter='' text='Pacientes'  ></SubTitle>
            </div>
            <div className=' pt-10 grid grid-col grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-2 '>
                <Patients></Patients>
            </div>
        </div>
    )
}

export default MyPatients