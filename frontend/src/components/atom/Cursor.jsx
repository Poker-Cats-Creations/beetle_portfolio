'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useMagneticCursor } from '@/hooks/useMagneticCursor'
import { gsap } from 'gsap'

const Cursor = () => {
   const cursorRef = useRef(null)
   const cursorEnabledRef = useRef(true)

   const handleMouseEnter = (e) => {
      const rect = e.target.getBoundingClientRect()
      gsap.to(cursorRef.current, {
         opacity: 0,
      })
      //cursorEnabledRef.current = false
      // gsap.set(cursorRef.current, {
      //    xPercent: 0,
      //    yPercent: 0,
      // })
      // gsap.to(cursorRef.current, {
      //    width: rect.width,
      //    height: rect.height,
      //    backgroundColor: '#FFFFFF0F',
      //    borderColor: 'transparent',
      //    borderRadius: '8px',
      //    x: rect.left + window.scrollX + rect.width / 2 - rect.width / 2,
      //    y: rect.top - window.scrollY + rect.height / 2 - rect.height / 2,
      // })
   }

   const handleMouseLeave = () => {
      //cursorEnabledRef.current = true
      gsap.to(cursorRef.current, {
         opacity: 1,
      })
      // gsap.set(cursorRef.current, {
      //    xPercent: -50,
      //    yPercent: -50,
      // })
      // gsap.to(cursorRef.current, {
      //    borderRadius: '1000px',
      //    width: '24px',
      //    height: '24px',
      //    borderColor: '#FFF',
      //    backgroundColor: 'transparent',
      // })
   }

   const moveCursor = (e) => {
      if (cursorEnabledRef.current) {
         gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            stagger: 0.03,
         })
         // gsap.set(cursorRef.current, {
         //    transformOrigin: '-50% -50%',
         // })
      }
      // else {
      //    gsap.set(cursorRef.current, {
      //       transformOrigin: '100% 100%',
      //    })
      // }
   }

   useMagneticCursor(handleMouseEnter, handleMouseLeave)

   useEffect(() => {
      window.addEventListener('mousemove', moveCursor)

      return () => {
         window.removeEventListener('mousemove', moveCursor)
      }
   }, [])

   return (
      <div
         ref={cursorRef}
         className='z-50 w-6 h-6 border-2 absolute left-0 top-0 border-white rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2  -translate-y-1/2'

         //style={{ opacity: 0 }}
      />
   )
}

export default Cursor
