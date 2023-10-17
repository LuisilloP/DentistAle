import Image from 'next/image'
import React from 'react'
import star from "../../../public/svg/star.svg"
type Props =
    {
        name: string
        stars: number
        opinion: string
    }

const Testimonial = (props: Props) => {
    const { name, opinion, stars } = props
    return (
        <div>
            <div>
                <p>{name}</p>
                {star}
                <p>{opinion}</p>
            </div>
        </div>
    )
}

export default Testimonial