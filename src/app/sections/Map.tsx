import React from 'react'
import SubTitle from '../components/SubTitle'

type Props = {}

const Map = (props: Props) => {
    return (
        <div className='w-full pt-10'>

            <div className=''>
                <iframe

                    className=' hover:scale-105 transition ease-in-out w-full h-[30rem] lg:h-[40vw] border-0 '
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d649.6521449885762!2d-71.18877452402386!3d-30.577297232032613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968fcbd8dc253339%3A0x6fd53bb504852270!2sClinica%20Dental%20SB!5e0!3m2!1ses!2scl!4v1699552805732!5m2!1ses!2scl"
                    loading="lazy" >
                </iframe>
            </div>
        </div>
    )
}

export default Map