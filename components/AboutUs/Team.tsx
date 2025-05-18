import React from 'react'
import Member from './Member'

const Team = () => {
    return (
        <section className='mx-40 xs:max-xl:mx-7 my-28 flex xs:max-md:flex-col gap-8'>
            <div className='basis-1/3 text-left'>
                <h1 className='text-[40px] font-bold'>Meet Our Team</h1>
                <p className='text-aboutgray
                 leading-[28px] font-normal text-base'>Amet minim mollit non deserunt ullamco
                    est sit aliqua dolor do amet sint.
                </p>
            </div>
            <div className='basis-2/3 flex'>
                <div className='basis-1/3 flex-1  flex flex-col gap-8 text-left'>
                    <Member name='Kathryn Murphy' role='Designer' />
                    <Member name='Kathryn Murphy' role='Designer' />
                    <Member name='Kathryn Murphy' role='Designer' />
                </div>
                <div className='basis-1/3 flex-1 flex flex-col gap-8 text-left'>
                    <Member name='Kathryn Murphy' role='Designer' />
                    <Member name='Robert Fox' role='Photography' />
                    <Member name='Jenny Wilson' role='Support Manger' />

                </div>
            </div>
        </section>
    )
}

export default Team