"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function GsapStagger() {
    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-orange-500",
        "bg-teal-500",
    ];

    useEffect(() => {
        // Animate FROM invisible small boxes TO full visible size
        gsap.fromTo(
            ".gsap-stagger",
            {
                y: -180,
                opacity: 0,
                scale: 0.5,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.1, // one after another
                // repeat: -1,
                boxShadow: "0px 10px 15px 0px white",
                yoyo: true,
            }
        );
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="grid grid-cols-4 gap-6">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`w-40 h-50 ${color} gsap-stagger flex items-center justify-center text-white font-semibold rounded-lg shadow-lg`}
                    >
                        Box {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
