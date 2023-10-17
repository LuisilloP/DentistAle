import React from 'react'

type Props = {}

const BannerDent = (props: Props) => {
    return (
        <div className='min-h-[20rem] h-[25rem] flex bg-[#191919]'>
            <div className='bg-black h-[50%] md:h-[100%] w-[50%] clip-path-two-f '>p</div>
            <div className='color-beige h-[50%] md:h-[100%]  w-[50%] clip-path-one-f'></div>
        </div>
    )
}

export default BannerDent