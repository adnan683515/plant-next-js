"use client"
import gsap from "gsap"
import React, { useEffect } from "react"

export default function GsapFromTo() {
    useEffect(() => {
        gsap.fromTo(
            "#box",
            {
                x: 0,
                borderRadius: 0,
                opacity: -.5
            },
            {
                x: 1000,
                borderRadius: "100%",
                duration: 1.5,
                repeat: -1,
                opacity: 1
            }
        )
    }, [])

    return (
        <div
            id="box"
            className="w-[100px] h-[100px] px-10 py-3 text-white flex justify-center items-center bg-red-700 rounded-lg"
        >
            GsapFromTo
        </div>
    )
}
