"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function GsapTo() {



    useEffect(() => {
        gsap.to('#box-1', { ease: 'elastic', x: 200, duration: 2, repeat: -1, yoyo: true, rotate: 360 })
    }, [])

    return (
        <div id='box-1' className='w-50 text-white flex justify-center items-center h-50 bg-green-950 rounded-lg'>GsapTo</div>
    )
}
