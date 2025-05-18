import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='xs:max-lg:w-full xs:max-lg:mt-4'>

    <p className='footer_header'>
        Email Address
    </p>

    <div className=' pl-4 rounded-md h-16  lg:w-96 flex items-center border-2 border-[#C0CBF01A] gap-2'>
        <Mail className='h-8 w-8 text-white' />
        <Input type="email"
            style={{ outline: "none", border: "none" }}
            placeholder='dom@mail.com'
            className={`
            h-full
            w-full
            no-ring:focus
            text-lg
            text-white
            placeholder:text-base 
            placeholder:font-normal 
            focus-visible:ring-0
            focus-visible:ring-offset-0
            bg-transparent`
            } />
    </div>


    <Button className='xs:max-lg:w-full  w-96 mt-8 text-xs px-3 py-4 text-white text-center bg-bg_blue rounded-3xl'>
        Subscribe to our Newsletter
    </Button>
</div>
  )
}

export default Subscribe