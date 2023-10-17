import React from 'react'

type Props = {}

const ButtonContact = (props: Props) => {
    return (
        <a target='_blank'
            className=' text-center flex justify-center items-center w-[11rem] h-[2.6rem] border-solid border px-5 border-[#ada192]  gray-three text-white rounded-lg cursor-pointer '>
            Reservar Hora
        </a>
    )
}
export default ButtonContact