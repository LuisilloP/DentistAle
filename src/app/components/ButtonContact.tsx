import React from 'react'

type Props = {}

const ButtonContact = (props: Props) => {
    return (
        <a target='_blank'
            className=' text-center flex justify-center items-center w-[11rem] h-[2.6rem] border-solid border px-5 border-sky-700 text-sky-700 rounded-2xl cursor-pointer '>
            Reservar Hora
        </a>
    )
}

export default ButtonContact