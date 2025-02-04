"use client"

import { useEffect, useRef } from "react"
import { ny } from "~/lib/utils"

interface GlobeGridProps {
   className?: string
   children?: React.ReactNode
}

export default function GlobeGrid({ className, children }: GlobeGridProps) {
   return (
      <section
         className={ny("relative overflow-hidden", className)}
         style={
            {
               "--sm-grid-rows": 7,
               "--md-grid-rows": 6,
               "--sm-grid-columns": 8,
               "--md-grid-columns": 12,
               "--sm-height":
                  "calc(var(--width) / var(--grid-columns) * var(--grid-rows))",
            } as React.CSSProperties
         }
      >
         {/* Mobile Background Overlay */}
         <div className="bg-background-200 absolute inset-0 right-px z-[3] md:hidden" />

         {/* Globe Container */}
         <div className="absolute left-0 top-0 z-[5] ml-[-0.5px] w-full md:left-1/2 md:top-1/2 md:h-[200%] md:-translate-x-1/2 md:-translate-y-1/2">
            <svg
               aria-hidden="true"
               height="100%"
               width="100%"
               viewBox="-1 -1 802 402"
               style={{
                  transform: "translateY(0px) scale(1.002)",
               }}
            >
               <GlobeWireframe />
               <AnimatedPaths />
               <Gradients />
            </svg>
         </div>

         {/* Content */}
         <div className="relative z-10">{children}</div>
      </section>
   )
}

function GlobeWireframe() {
   return (
      <g data-testid="globe-wireframe">
         <circle cx="400" cy="400" r="400" fill="var(--ds-background-200)" />

         {/* Vertical curved lines */}
         {[-400, -266.667, -133.333, 0, 133.333, 266.667, 400].map((x, i) => (
            <path
               key={`vertical-${i}`}
               d={`M 400 800 A ${x} 400 0 0 0 400 0`}
               fill="none"
               stroke="url(#globe-gradient)"
               strokeWidth="1"
               vectorEffect="non-scaling-stroke"
            />
         ))}

         {/* Horizontal lines */}
         {[
            [178.892, 66.667, 442.217],
            [101.858, 133.333, 596.285],
            [53.59, 200, 692.82],
            [22.876, 266.667, 754.247],
            [5.595, 333.333, 788.811],
            [0, 400, 800],
            [5.595, 466.667, 788.811],
            [22.876, 533.333, 754.247],
            [53.59, 600, 692.82],
            [101.858, 666.667, 596.285],
            [178.892, 733.333, 442.217],
         ].map(([start, y, width], i) => (
            <path
               key={`horizontal-${i}`}
               d={`M${start},${y} h${width}`}
               fill="none"
               stroke="url(#globe-gradient)"
               strokeWidth="1"
               vectorEffect="non-scaling-stroke"
            />
         ))}
      </g>
   )
}

function AnimatedPaths() {
   return (
      <>
         <AnimatedPath
            id="path1"
            color="hsl(54, 88%, 65%)"
            duration="5.5s"
            d="M794.405,333.333 h-131.468M662.937,333.333 h-131.468M531.468,333.333 h-131.468M400,333.333 h-131.468M 268.532 333.333 A -133.333 400 0 0 0 266.667 400M266.667,400 h-133.333M133.333,400 h-133.333"
         />
         {/* Add other animated paths similarly */}
      </>
   )
}

interface AnimatedPathProps {
   id: string
   color: string
   duration: string
   d: string
}

function AnimatedPath({ id, color, duration, d }: AnimatedPathProps) {
   return (
      <g id={id} opacity="1">
         <path
            d={d}
            fill="none"
            stroke={`url(#${id}-gradient)`}
            strokeLinecap="round"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
         >
            <animate
               attributeName="opacity"
               dur={duration}
               keyTimes="0;0.091;0.182;0.273;0.364;0.455;0.545;0.636;0.727;0.818;1"
               repeatCount="indefinite"
               values="0;1;1;1;1;1;1;1;1;0;0"
            />
         </path>
         <defs>
            <radialGradient
               id={`${id}-gradient`}
               cx="100"
               cy="100"
               r="0"
               gradientUnits="userSpaceOnUse"
            >
               <stop offset="0" stopColor={color} />
               <stop offset="0.4" stopColor={color} />
               <stop offset="1" stopColor={color} stopOpacity="0" />
               <animate
                  attributeName="cx"
                  dur={duration}
                  repeatCount="indefinite"
                  values="794.405;794.405;662.937;531.468;400;268.532;266.667;133.333;0;0;0"
               />
               <animate
                  attributeName="cy"
                  dur={duration}
                  repeatCount="indefinite"
                  values="333.333;333.333;333.333;333.333;333.333;333.333;400;400;400;400;0"
               />
               <animate
                  attributeName="r"
                  dur={duration}
                  repeatCount="indefinite"
                  values="0;100;100;100;100;100;100;100;100;0;0"
               />
            </radialGradient>
         </defs>
      </g>
   )
}

function Gradients() {
   return (
      <defs>
         <linearGradient id="globe-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--grid-line-color)" />
            <stop offset="1" stopColor="var(--grid-line-color)" />
         </linearGradient>
      </defs>
   )
}
