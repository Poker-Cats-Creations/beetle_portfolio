import React, { useState } from 'react'
import { Button } from '@/components/atom/Button'
import ModelsGallery from '@/components/molecule/ModelsGallery/index'
import Image from 'next/image'

const Gallery = ({ images = [], models = [] }) => {
   const [activeFilter, setActiveFilter] = useState('all')

   const changeFilter = (filter) => {
      setActiveFilter(filter)
   }

   const filteredContent = () => {
      switch (activeFilter) {
         case '2d':
            return images.map((image, i) => (
               <Image
                  key={i}
                  src={image.url}
                  alt={image.title}
               />
            ))
         case '3d':
            return <ModelsGallery models={models} />
         default:
            return [...images, ...models].map((item, i) => (
               <div
                  key={i}
                  className={'w-full h-full bg-pig-pink-200 rounded-2xl p-6'}>
                  Image
               </div>
            ))
      }
   }

   return (
      <div className='space-y-10'>
         <div className='flex space-x-3'>
            <Button
               size='xs'
               // disabled={activeFilter === 'all' && true}
               variant={activeFilter === 'all' ? 'secondary' : 'outline'}
               className={`w-16`}
               onClick={() => changeFilter('all')}>
               All
            </Button>
            <Button
               size='xs'
               // disabled={activeFilter === '2d' && true}
               variant={activeFilter === '2d' ? 'secondary' : 'outline'}
               className={`w-16 ${activeFilter === '2d' ? 'active' : ''}`}
               onClick={() => changeFilter('2d')}>
               2D
            </Button>
            <Button
               size='xs'
               // disabled={activeFilter === '3d' && true}
               variant={activeFilter === '3d' ? 'secondary' : 'outline'}
               className={`w-16 ${activeFilter === '3d' ? 'active' : ''}`}
               onClick={() => changeFilter('3d')}>
               3D
            </Button>
         </div>
         <div className='h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>{filteredContent()}</div>
      </div>
   )
}

export default Gallery
