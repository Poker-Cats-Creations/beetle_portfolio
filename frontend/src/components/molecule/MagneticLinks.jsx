'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../atom/Button'
import { OutlineHome } from '@/icons/Icons'

export const MagneticLinks = () => {
   return (
      <div className='relative magnetic-container'>
         <Button
            asChild
            variant='empty'
            size='sm-link'
            className='magnetic-link'>
            <Link href={'#'}>
               Link One <OutlineHome size={24} />
            </Link>
         </Button>
         <Button
            asChild
            variant='empty'
            size='sm-link'
            className='magnetic-link'>
            <Link href={'#'}>
               Link Two <OutlineHome size={24} />
            </Link>
         </Button>
         <Button
            asChild
            variant='empty'
            size='sm-link'
            className='magnetic-link'>
            <Link href={'#'}>Link Three</Link>
         </Button>
         <Button
            asChild
            variant='empty'
            size='sm-link'
            className='magnetic-link'>
            <Link href={'#'}>Link Four</Link>
         </Button>
      </div>
   )
}

export default MagneticLinks
