import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className='flex items-center'>

        <Image
          src={"/assets/images/loreon_logo.png"}
          className="xs:max-lg:w-[70px] w-[70px]"
          alt='logo'
          width={100}
          height={100}
          
        />
        
        <h1>Loreon Learning</h1>
      </div>
      
    </Link>
  )
}

export const DarkLogo = () => {
  return (
    <Link href={'/'}>
      <div title='Go to Home'>
        <Image
          src={"/assets/images/loreonlog_dark.png"}
          className="xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
          alt='logo'
          width={1000}
          height={1000}
        />
      </div>
    </Link>

  )
}


export const OpsSchoolLogo = () => {
  return (
    <Link href={'/'}>
      <div title='Go to Home'>
        <Image
          src={"/assets/images/training/opschool.png"}
          className="xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
          alt='logo'
          width={1000}
          height={1000}
        />
      </div>
    </Link>
  )
}


export const OpsSchoolDarkLogo = () => {
  return (
    <Link href={'/'}>
      <div title='Go to Home'>
        <Image
          src={"/assets/images/training/logo_dark.png"}
          className="xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
          alt='logo'
          width={1000}
          height={1000}
        />
      </div>
    </Link>
  )
}
export default Logo