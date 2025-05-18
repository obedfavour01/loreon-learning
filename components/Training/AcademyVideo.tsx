"use client"
import React from 'react'
import ReactPlayer from 'react-player'



const AcademyVideo = () => {
  const factor = 0.3
  return (
    <ReactPlayer
        width={'100%'}
        height={"100%"}
        url={"https://youtu.be/UbtB4sMaaNM?si=M4u2wo7aErPSyEkM"}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        style={{width:`${factor*4}vw`, height: `${factor*3}vw`}}
        
        />
  )
}

export default AcademyVideo