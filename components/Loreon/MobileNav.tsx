"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { smoothScroll } from "./Hero/Nav"

export function MobileNav() {
  const [open, setOpen] = useState(false)


   const handleMobileLinkClick = (tag: string) => {
    setOpen(false);
    smoothScroll(tag);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left text-blue-500 font-medium text-xl">Loreon Learning</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          <nav className="flex flex-col gap-4">
            <Link
              href="#why" passHref legacyBehavior
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <a onClick={(e) => {
                      e.preventDefault(); // Prevent default Next.js behavior
                      handleMobileLinkClick('why');
                    }}>  Why Sign Up </a>
                  
            </Link>
            <Link
              href="#instructor" passHref legacyBehavior
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <a onClick={(e) => {
                      e.preventDefault(); // Prevent default Next.js behavior
                      handleMobileLinkClick('instructor');
                    }}>  Instructor </a>
                  
            </Link>
            <Link
              href="#testimonials" passHref legacyBehavior
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <a onClick={(e) => {
                      e.preventDefault(); // Prevent default Next.js behavior
                      handleMobileLinkClick('testimonials');
                    }}>  Testimonials </a>
                  
            </Link>
          </nav>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
            
             <div className="xs:max-md:overflow-hidden xs:max-md:space-x-4 bg-[#F5EAE6] w-max  rounded-[200px] px-[5px] py-3">
            
            
                        <Link
                          href="https://bit.ly/LOREON"
                          target='_blank'
                          className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool 
                            bg-[#F15A24] rounded-[100px] text-black
                            `}

                            onClick={() => setOpen(false)}
                            >
                          Enrol Now
                        </Link>
                          </div>


           
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
