import React from 'react'
import womenImageContact from "../../../public/womenImageContact.png"
import Image from 'next/image'
type Props = {}

const ImageTextContact = (props: Props) => {
    return (
        <div>
            <Image className=' opacity-90' src={womenImageContact} alt='Mujer Sonriente'></Image>
        </div>
    )
}

export default ImageTextContact