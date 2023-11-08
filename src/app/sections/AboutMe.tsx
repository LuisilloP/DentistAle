import Image from 'next/image'
import React from 'react'
import dentistPrincipal from "../../../public/dentistPrincipal.webp"
import SubTitle from '../components/SubTitle'
type Props = {}

const AboutMe = (props: Props) => {

    return (
        <div className='grid grid-row md:grid-cols-2 gap-5 md:gap-12 pb-10 md:pb-0 '>
            <Image src={dentistPrincipal} className=' h-[30rem] md:h-[100%] lg:h-[45rem] md:w-[100%]  min-h-[20rem] object-cover object-top' alt='dentist'></Image>
            <div className=' md:pt-10 px-2 md:pl-10'>
                <h4 className='text-xs gray-text-three pb-4 '>Sobre mi</h4>
                <SubTitle classAlter='gray-text-three text-shadow-special  ' text='ALEJANDRO BACIC VARAS'></SubTitle>

                <div className='flex flex-col gap-5 pt-10'>

                    <p className='text-sm text-zinc-200 font-bold'>
                        El Dr. Alejandro Bacic completó sus estudios de postgrado en odontología en la Universidad de Sydney, tras haber cursado anteriormente estudios de fisioterapia. Ha ejercido la odontología extensamente en las regiones metropolitanas y rurales de Nueva Gales del Sur, antes de regresar a Sydney, a la que considera su hogar.
                    </p>
                    <p className='text-sm text-zinc-200 font-bold'>
                        Cariñoso y comprensivo, el Dr. Alejandro se esfuerza por proporcionar a los pacientes el más alto nivel de atención. Sentado en la silla del Dr. Alejandro, usted se convierte en su prioridad número uno. Es un apasionado de hacer que los pacientes se sientan cómodos y a gusto, mientras que entrega resultados perfectos.
                    </p>
                    <p className='text-sm text-zinc-200 font-bold'>
                        Con su enfoque suave y compasivo, el Dr. Alejandro sin esfuerzo pone a los pacientes nerviosos a gusto. Impulsado por su inquebrantable creencia en el potencial de cambio de vida de una sonrisa segura, se enorgullece de utilizar sus habilidades artísticas para crear hermosas sonrisas a medida.
                    </p>
                    <p className='text-sm text-zinc-200 font-bold'>
                        Cuando no está trabajando, el Dr. Alejandro Bacic es un apasionado entusiasta del deporte y disfruta pasando tiempo de calidad con su hija. Su amor por el deporte es evidente en su participación activa en diversas actividades deportivas. A menudo se le encuentra compartiendo momentos especiales con su hija, ya sea jugando en el parque o alentándola en sus propios esfuerzos deportivos.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe