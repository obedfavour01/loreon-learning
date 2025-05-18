"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

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
          <SheetTitle className="text-left text-blue-500 font-medium text-xl">Findyourpeople.tech</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          <nav className="flex flex-col gap-4">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              Terms of use
            </Link>
          </nav>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
            <Link
              href="/signin"
              className="w-full px-5 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="w-full px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
