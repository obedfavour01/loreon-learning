"use client"
import NavItem from './NavItem'
import { Button } from './ui/button'
import Logo, { DarkLogo, OpsSchoolDarkLogo, OpsSchoolLogo } from './Logo'
import MobileSidebar from './MobileSidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"



import Link from 'next/link'
import { ChevronDown, ChevronUp, LogOut, Mail, MessageSquare, PlusCircle, UserPlus } from 'lucide-react'
import { cn } from '@/lib/utils'
// import { LoginButton } from './buttons/login-button'
import { useUser } from '@auth0/nextjs-auth0/client'

const Navbar = ({ className, variant }: { className?: string, variant: 'dark' | 'light' }) => {


  const { user } = useUser()
  console.log(user)
  return (
    <div className={cn(`flex 
      justify-between 
      items-center py-5 
      px-7 
      rounded-[100px]
      mb-3 
      mx-4 
      lg:mx-20
      xs:max-lg:px-6 
      xs:max-lg:pt-4 
      backdrop-blur-md 
      bg-[#FFFFFF12]`, className)}>
      {variant== "dark" ? <OpsSchoolLogo/> : <OpsSchoolDarkLogo/> }
      <div className='flex gap-3 items-center'>

        <div className='flex gap-6 items-center xs:max-lg:hidden'>
          <NavItem
            text="Data"
            href="/data"
            className={`${variant === 'light' ? 'text-black' : 'text-white'}`} />
          <NavItem
            text="DevOps"
            href="/devops"
            className={`${variant === 'light' ? 'text-black' : 'text-white'}`} />

          {/* <DropdownMenu>
            <DropdownMenuTrigger >
              <NavItem
                href=''
                className={`${variant === 'light' ? 'text-black' : 'text-white'}`}>
                <span className='flex items-center'>
                  <span >Training</span>
                  <span> <ChevronDown /></span>
                </span>
              </NavItem>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='pl-6 py-2 '>
              <Link href={"/training"}>
                <DropdownMenuLabel>Overview</DropdownMenuLabel>
              </Link>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className=''>
                <h5 className='text-black '>Role based</h5>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className='mx-2' >
                    <DropdownMenuItem >
                      <Link href={"/training/data"}>
                        <span className='text-black'>Data</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/training/devops"}>
                        <span className='text-black'>DevOps</span>

                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>


              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <h5 className='text-black w-28'>Certification  </h5>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className='mx-2'>
                    <DropdownMenuItem>
                      <span className='text-black'>
                        AWS Developer</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                      <span className='text-black'>AWS Sysops</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className='text-black'>AWS DevOps</span>
                      </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

            </DropdownMenuContent>
          </DropdownMenu> */}

          <NavItem
            text="Blogs & News"
            href='/blog'
            className={`${variant === 'light' ? 'text-black' : 'text-white'}`} />



          <NavItem
            text="Contact Us"
            href='/contact-us'
            className={`${variant === 'light' ? 'text-black' : 'text-white font-bold'}`} />

        </div>
        </div>
        {

          user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user.picture!} alt="@shadcn" />
                  <AvatarFallback>
                    {user!.name!.split(" ")[0]?.charAt(0)}{user!.name!.split(" ")[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src={user.picture!} alt="@shadcn" />
                      <AvatarFallback>
                        {user!.name!.split(" ")[0]?.charAt(0)} {user!.name!.split(" ")[1]?.charAt(0)}

                      </AvatarFallback>
                    </Avatar>
                    <div className='font-roboto'>
                      <p>{user.name}</p>
                      <p>  {user.email} </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>

                  <Link href="/api/auth/logout" className='flex gap-4'>
                    <LogOut />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
          :
          
          <div className='flex items-center gap-4'>

          <MobileSidebar variant={variant} />
          <Button className={`${variant === 'light' ?
            `bg-loreonblue text-white` :
            `bg-[#F15A24] text-white `}  rounded-6xl`}>
              <a href="/api/auth/login">

                Get started
              </a>
            </Button>

          </div>
        }






    </div >
  )
}

export default Navbar