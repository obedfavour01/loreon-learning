"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavItemProps = {
  text?: string,
  href?: string,
  children?: React.ReactNode,
  className?: string
}


const NavItem = ({ children, text, href = "#",className }: NavItemProps) => {

  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        cn(`text-sm hover:text-gray-400 font-bold font-roboto
              ${path === href && `text-black`}`,className)
      }
      passHref>
      {
        children || <p> {text} </p>
      }
    </Link>
  )
}

export default NavItem