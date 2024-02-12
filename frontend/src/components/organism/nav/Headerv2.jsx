'use client'

import { Button } from '@/components/atom/Button'
import AnimatedTabs from '@/components/molecule/Tab'
import { OutlineClose, OutlineHome, OutlineMenu, SolidLogo } from '@/icons/Icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import MagneticLinks from '@/components/molecule/MagneticLinks'

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   let pathname = usePathname()

   const links = [
      {
         content: 'Home',
         // icon: <OutlineHome size={24} />,
         link: '#',
      },
      {
         content: 'About me',
         link: '#',
      },
      {
         content: 'TOS',
         link: '#',
      },
   ]

   return (
      <React.Fragment>
         <header
            className={`fixed shadow-lg transform mx-6 sm:mx-0 top-6 left-0 sm:left-1/2 sm:-translate-x-1/2 flex z-50 backdrop-blur-md bg-pig-pink-950/80 text-pig-pink-50 rounded-2xl`}>
            <div className={`flex gap-12 w-full items-center justify-between h-max p-2 z-10`}>
               <nav className='flex sm:hidden'>
                  <Button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     variant='ghost'
                     size='sm-icon'>
                     {!isMenuOpen ? <OutlineMenu size={24} /> : <OutlineClose size={24} />}
                  </Button>
               </nav>
               <nav className='space-x-6 items-center text-sm font-medium text-primary-dark hidden sm:flex'>
                  <Link
                     className='text-lg ml-2 hover:scale-125 transition-all'
                     href='/'>
                     <SolidLogo
                        size={48}
                        // className='text-charade-950'
                     />
                     {/* Logo */}
                  </Link>

                  <div>
                     {links.map((item, idx) => (
                        <Button
                           key={idx}
                           asChild
                           variant='ghost'
                           size='sm-link'
                           className='min-w-max text-pig-pink-50'>
                           <Link href={item.link}>
                              {item.content}
                              {item.icon}
                           </Link>
                        </Button>
                     ))}
                  </div>

                  <Button
                     variant={'white'}
                     size='sm'>
                     Button
                  </Button>
               </nav>
            </div>
         </header>
         <motion.nav
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -100 }}
            transition={{ type: 'linear', stiffness: 260, damping: 0 }}
            className={`fixed ${isMenuOpen ? 'flex' : 'hidden'} pt-32 w-full h-screen bg-primary-dark/90 backdrop-blur-lg`}>
            <ul className='px-6 space-y-3'>
               <li>
                  <Link
                     href='/'
                     className={`${pathname === '/' && 'link-gradient'}`}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href='/tos'
                     className={`${pathname === '/tos' && 'link-gradient'}`}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                     Terms of Service
                  </Link>
               </li>
               {/* <li>
                     <Link
                        href='/contact'
                        className={`${pathname === '/contact' && 'link-gradient'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        Contact
                     </Link>
                  </li> */}
            </ul>
         </motion.nav>
      </React.Fragment>
   )
}
