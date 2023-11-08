import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ButtonContact from './ButtonContact'

type Props =
    {
        image: StaticImageData | string,
        name: string,
        text: string,
    }

const Service = (props: Props) => {
    const { image, name, text } = props
    return (
        <div className='flex flex-col'>
            <div className="flex h-[18rem] lg:h-[24rem] items-center justify-center rounded card-service cursor-pointer">
                <div className="group h-[18rem] lg:h-[24rem] w-full rounded  ">
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <Image className=" h-[100%] md:h-[18rem] lg:h-[24rem] rounded object-cover shadow-xl shadow-black/40" width={700} height={700} src={image} alt={name} />
                        </div>
                        <div className="absolute inset-0 h-full w-full rounded bg-black/80 px-3 md:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold pb-2">{name}</h1>
                                {/* <p className="text-lg pb-6">En que consiste </p> */}
                                <p className="text-base pb-2 sm:pb-5 lg:pb-10">{text}</p>
                                <ButtonContact></ButtonContact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className=' button md:hidden text-white  pt-2 text-center font-bold'></p>
            <h2 className=' none-name-card text-zinc-50 text-2xl font-poppins font-semibold text-center pt-2'>{name}</h2>
        </div>
    )
}








export default Service