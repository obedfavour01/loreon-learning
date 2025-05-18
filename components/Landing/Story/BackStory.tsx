import React from 'react'
import { Button } from '../../ui/button'

const BackStory = ({id}:{id?:string}) => {
    return (
        <div className='basis-1/2 ' id = {id}>
            <p className='text-loreonblue text-sm font-semibold' >
                Breaking business barriers
            </p>
            <h1 className="font-normal
                text-6xl 
                xs:max-lg:text-3xl
                leading-[63px]
                text-[#343434]"
            >
                Loreon <br/> Backstory</h1>
            <p className='my-4 text-xl  font-light text-wrap'>
                Lorem ipsum dolor sit amet consectetur
                adipiscing elit Ut et massa <br />
                Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur, ultrices mauris.<br/>
                Maecenas vitae mattis tellus.
                Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo,<br/>
                non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante.
            </p>

            <p className='text-xl font-light xs:max-xl:hidden '>
                Lorem ipsum dolor sit amet consectetur
                adipiscing elit Ut et massa mi.
                Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla,
                mattis ligula consectetur,
                ultrices mauris.
            </p>

            <Button className='bg-bg_blue mt-8 rounded-xl'>
                Get Started
            </Button>
        </div>
    )
}

export default BackStory