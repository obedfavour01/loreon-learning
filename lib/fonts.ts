
import localFont from 'next/font/local'

import {  Arimo, Inter, Poppins, Roboto, Syne } from "next/font/google"
export const RobotoFonts = Roboto({
    weight: ["100","300","400","700","900"],
    subsets:['latin'],
    variable: "--font-roboto"
})
  
  export const Pop = Poppins({
    weight: ["400","500","600","700","800"],
    subsets:["latin-ext"]}
  )
  
  export const InterFonts = Inter({
    weight: ["400","500","600","700","800"],
    subsets:["latin"]}
  )
  
export const Coolvetica = localFont({
  src: '../app/fonts/coolvetica rg.ttf',
  display: 'swap',
  variable: '--font-coolvetica'
})