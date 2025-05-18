import React from 'react'
import Member from '../AboutUs/Member'
import Requirements from '../Devops/Requirements'

const AboutData = () => {
    return (
        <section className='flex 
        xs:max-md:flex-col 
        mx-[86px] xs:max-md:mx-7
        my-48 xs:max-md:my-96 
        items-center '>
            <div className='basis-7/12 py-5 mr-14 space-y-4'>
                <h1 className='text-4xl font-medium'>
                    What is Data Analysis Programme?
                </h1>
                <p className='text-[#586283]'>
                    Developed in partnership with ExploreAI, a leader in Data Analytics education. The first 8 weeks are ALX Foundations, where you will learn critical communication, leadership, and career development skills that will help you thrive in the digital workforce. During the data analytics specialisation, you will focus your attention on real-world applications of data analysis and gain a basic understanding of how to explore, analyse, transform, and visualise data. In the end, you will receive a certificate of completion in Data Analytics.
                </p>
                <Requirements/>
            </div>
            <div className='basis-4/12 lg:border-l-2 h-max lg:border-datagreen lg:pl-14 leading-8 py-5 '>
                <p className='text-[#586283]'>
                    This has profound impact on my career development.
                    The programme exceeded my expectations in every way.
                    Within weeks of graduating and implementing some
                    of the learnt strategies, I began to get invitations
                    for interviews, one of which has translated into my current job.”
                </p>


                <div>
                    <Member name='Jenny Wilson' role='Nigeria' />
                </div>
            </div>
        </section>
    )
}

export default AboutData