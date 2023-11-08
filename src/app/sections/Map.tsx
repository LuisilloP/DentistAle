import React from 'react'
import SubTitle from '../components/SubTitle'

type Props = {}

const Map = (props: Props) => {
    return (
        <div className='w-full pt-10'>

            <div className=''>
                <iframe

                    className=' hover:scale-105 transition ease-in-out w-full h-[30rem] lg:h-[40vw] border-0 '
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1021.2369374892991!2d-71.18935626087291!3d-30.577039550448117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1699288246129!5m2!1ses!2scl"
                    loading="lazy" >
                </iframe>
            </div>
        </div>
    )
}

export default Map