import React from 'react'
import IndexCard from '../components/IndexCard'

import data from "../data/IndexData"
type Props = {}

const Index = (props: Props) => {

    return (
        <div className=' grid  md:grid-cols-3 gap-4 pt-10'>
            {data.map((data) =>
            (
                <IndexCard key={data.title} data={data}></IndexCard>
            ))}

        </div>
    )
}

export default Index