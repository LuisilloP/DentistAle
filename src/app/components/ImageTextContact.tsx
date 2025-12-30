import React from 'react'
import womenImageContact from "../../../public/images/people/womenImageContact.png"
import Image from 'next/image'

type Props = {
    alt: string
}

const ImageTextContact = ({ alt }: Props) => {
    return (
        <div>
            <Image className=' opacity-90' src={womenImageContact} alt={alt}></Image>
        </div>
    )
}

export default ImageTextContact
