import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Newsletter = () => {
    return (
        <section className='mx-40 flex xs:max-md:flex-col xs:max-lg:mx-7 lg:max-2xl:mx-24 items-center gap-8 my-24'>
            <div className='basis-1/2'>
                <h1 className='text-4xl font-bold text-[#69707C] py-2 leading-[44px]'>
                    Sign up for our newsletter
                </h1>
                <p className='text-base font-normal leading-7 text-[#7D7D7D8F]'>
                    Amet minim mollit non deserunt ullamco
                    est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.
                </p>
            </div>


            <div>
                <div className="flex 
                                w-full 
                                max-w-sm
                                items-center 
                                space-x-2">
                    <Input type="email" placeholder="Enter email address" className='h-12 w-64 py-1 px-4' />
                    <Button type="submit" className='py-1 bg-bg_blue h-12 '>Subscribe</Button>

                </div>
                    <p className='mt-4  text-xs text-[#7D7D7D8F]'>We care about the protection of your data. read our <span className='text-loreonblue/70'>Privacy policy</span></p>
            </div>
        </section>
    )
}

export default Newsletter