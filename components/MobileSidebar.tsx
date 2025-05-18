"use client"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,

}

  from "@/components/ui/accordion"
import NavItem from "./NavItem"


const MobileSidebar = ({ variant }: { variant: 'dark' | 'light' }) => {
  return (
    <div>
      <div>
        <Sheet>
          <SheetTrigger>
            <div className='lg:hidden' >
              <Menu size={28} color={variant === 'light' ? "black" : "white"} />
            </div>
          </SheetTrigger>


          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                <ul>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <a href="/about-us">About Us</a>
                      </AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <a href="/projects">Projects</a>
                      </AccordionTrigger>

                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Automation/Business & IT</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        <a href="/community">Community</a>
                      </AccordionTrigger>

                    </AccordionItem>



                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        <a href="/blog">Blogs & News</a>
                      </AccordionTrigger>

                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger>
                        <a href="/contact-us">Contact Us</a>
                      </AccordionTrigger>
                    </AccordionItem>


                    <AccordionItem value="item-7">
                      <AccordionTrigger>


                      </AccordionTrigger>
                      <AccordionContent>

                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

export default MobileSidebar