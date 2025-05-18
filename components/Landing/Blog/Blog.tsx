import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <section className='bg-black min-h-screen px-40 py-36 xs:max-xl:px-6  xs:max-lg:py-12 box-border'>
      <div>
        <h3 className='text-loreonorange'>FROM THE BLOG</h3>

        <h1 className='font-bold text-white text-5xl xs:max-lg:text-4xl leading-10 py-3'>
          Design is intelligence made visible.</h1>

        <p className='font-normal text-base text-white/50 my-6'>
          Creativity is a highfalutin word for the work I have to do between now and Tuesday.
        </p>


      </div>

      <hr className='my-8' />


      <div className='flex gap-8 xs:max-lg:overflow-x-scroll no-scrollbar'>
        <BlogPost
          tags={"Article"}
          title={"Guide for designing better mobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
          tagColor='#DB2777'
          tagBgColor='#FBCFE8'
        />


        <BlogPost
          tags={"Video"}
          title={"New Dashboard features to save you time"}
          content={`Dashboard is the hub for millions 
          of businesses to take action. We’ve 
          launched dozens of new features in the Dashboard...`}
          tagColor='#F25722'
          tagBgColor='#FFD89F'
          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />


        <BlogPost
          tags={"Article"}
          tagColor='#2A7576'
          tagBgColor='#90ECF4'
          title={"Noom sees an 8% increase in authorization rates with Dlex"}
          content={`The health platform boosted acceptance rates and expanded global coverage by switching to Dlex`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />
      </div>

      <p className='font-light mt-6 text-xs flex justify-center text-white/50'>
        See More 
      </p>
    </section>
  )
}

export default Blog