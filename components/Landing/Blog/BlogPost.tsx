import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
type BlogPost = {
  tags: string,
  tagColor: string,
  tagBgColor: string,
  title: string,
  content: string,
  authorImg?: string,
  authorName: string,
  datePosted: string,
  readLen: number

}

enum TagColors{
  Article = '#DB2777',
  Video = '#F25722',
  CaseStudy = '#2A7576'
}

const BlogPost = ({ tags, title, content, authorImg, authorName, datePosted, tagBgColor,tagColor, readLen }: BlogPost) => {
  return (
    <div className=' min-w-80 basis-1/3'>
      <Button 
        size="sm" 
        style={{color:tagColor, backgroundColor:tagBgColor}}
        className={` rounded-3xl text-xs  ` }>
          {tags}
      </Button>

      <h1 className='font-bold mt-4 text-xl text-white'>{title}
      </h1>

      <p className='text-base w-3/4 font-normal my-4 text-white/50'>
        {content}
      </p>

      <div className='flex gap-6'>
        <div className='flex rounded-full w-12 h-12'>
          <Image
            src={"/assets/images/model.PNG"}
            width={300}
            height={300}
            alt='avatar'
            className='rounded-full w-12 h-12 object-contain'
          />

        </div>
        <div>
          <p className='font-bold text-sm text-white'>{authorName}</p>
          <p className='font-light text-xs text-white/50'>{datePosted} · {readLen} min read</p>
        </div>
      </div>
    </div>

  )
}

export default BlogPost