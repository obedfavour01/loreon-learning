"use client"
import Link from 'next/link'
import React from 'react'
import { MobileNav } from '../MobileNav'

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Logo from '@/components/Logo';


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export const smoothScroll = (id: string) => {
  if (typeof window === "undefined") return; // Prevents errors in SSR

  requestAnimationFrame(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: offsetPosition, autoKill: false },
      ease: "power2.inOut",
    });
  });
};

const Nav = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-blue-500 font-medium text-xl">
          <Logo/>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#why" passHref legacyBehavior className="text-gray-600 hover:text-gray-900">
            <a
                className="relative"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("why");
                }}
              >
                   Why Sign Up
              </a>
           
          </Link>
          <Link href="#instructor" passHref legacyBehavior className="text-gray-600 hover:text-gray-900">
            <a
                className="relative"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("instructor");
                }}
              >
                   Instructor
              </a>
           
          </Link>

          <Link href="#testimonials" passHref legacyBehavior className="text-gray-600 hover:text-gray-900">
            <a
                className="relative"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("testimonials");
                }}
              >
                   Testimonials
              </a>
           
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <Link
            href="/signin"
            className="px-5 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50 transition-colors"
          >
            Sign in
          </Link> */}
          <Link
            href="https://bit.ly/LOREON"
            target= {"_blank"}
            className="px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            Enrol Now
          </Link>
        </div>

        <MobileNav />
      </header>
  )
}

export default Nav