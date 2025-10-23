"use client"

import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function GsapFrom() {

    useEffect(() => {
        gsap.from('#box-from', {
            x: 600,
            rotate: 150,
            yoyo: true,
            duration: 1,
            ease: 'circ.in'
        })
    }, [])

    return (
        <div id='box-from' className='w-52 back h-52 text-white  flex justify-center items-center rounded-lg'>GsapFrom</div>
    )
}
