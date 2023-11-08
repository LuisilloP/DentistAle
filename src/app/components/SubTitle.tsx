import React from 'react'

type Props =
    {
        text: string,
        classAlter?: string
    }

const SubTitle = (props: Props) => {
    const { text, classAlter } = props;
    return (
        <h2 className={`color-text-beige  font-poppins font-semibold text-5xl md:text-[3.3rem] text-shadow-special leading-10 ${classAlter} `} >{text}</h2>
    )
}

export default SubTitle