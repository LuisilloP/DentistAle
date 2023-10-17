import React from 'react'

type Props =
    {
        text: string,
        classAlter?: string
    }

const SubTitle = (props: Props) => {
    const { text, classAlter } = props;
    return (
        <h2 className={`  aqua-principal font-poppins font-semibold text-4xl md:text-6xl text-shadow-special leading-10 ${classAlter} `} >{text}</h2>
    )
}

export default SubTitle