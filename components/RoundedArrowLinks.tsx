import React from 'react'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

interface RoundedArrowProps{
    width:string;
    bgColor:string;
    arrowColor:string;
    arrowSize:number;
    className?: string;
}

const RoundedArrowLinks = ({width,bgColor,arrowColor,arrowSize,className}:RoundedArrowProps) => {
  return (
    <div className={`rounded-full
      sm:w-3
      xs:h-3
      flex justify-center items-center xs:max-lg:w-3/5 ${className}`} 
        style={{width: width,height:width,backgroundColor:bgColor}}>  

    <HiOutlineArrowSmallRight 
     size={arrowSize} 
     color={arrowColor} 
     className='-rotate-[32.32deg]'/>

    </div>
  )
}

export default RoundedArrowLinks