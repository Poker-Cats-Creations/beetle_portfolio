'use client'
import React from 'react'
import Gallery from '@/components/organism/Gallery/Index'
import { SolidLogo } from '@/icons/Icons'
import { Button } from '../atom/Button'
import { HomeIcon } from 'lucide-react'

const images = [
   { id: 1, path: '/image/image.webp' },
   { id: 2, path: '/image/image.wenp' },
]

const models = [
   { id: 1, path: '/models/model1.gltf' },
   { id: 2, path: '/models/model2.gltf' },
]

const Home = () => {
   return (
      <div className='space-y-10'>
         <div className={'space-y-4 flex max-lg:flex-col gap-12 justify-between'}>
            <div className='w-2/4 self-center flex flex-col'>
               <h1 className='text-6xl lg:text-8xl font-bold'>HIYA!</h1>
               <p className='text-lg lg:text-3xl'>I'm Beetle (they/them)! I'm a 25 year old queer full time artist and streamer based in PA!</p>
               {/* <div className='flex gap-3'>
                  <Button
                     variant={'ghost'}
                     size={'lg-icon'}>
                     <HomeIcon size={28} />
                  </Button>
                  <Button
                     variant={'ghost'}
                     size={'lg-icon'}>
                     <HomeIcon size={28} />
                  </Button>
                  <Button
                     variant={'ghost'}
                     size={'lg-icon'}>
                     <HomeIcon size={28} />
                  </Button>
                  <Button
                     variant={'ghost'}
                     size={'lg-icon'}>
                     <HomeIcon size={28} />
                  </Button>
                  <Button
                     variant={'ghost'}
                     size={'lg-icon'}>
                     <HomeIcon size={28} />
                  </Button>
               </div> */}
               <div className='flex gap-3 my-10'>
                  <Button variant='outline'>watch my streams </Button>
                  <Button>buy my bases</Button>
               </div>
            </div>

            <SolidLogo
               className='self-center max-md:w-full md:mr-24'
               size={512}
            />
         </div>

         <h3 className='text-4xl lg:text-6xl font-bold'>My Portfolio</h3>
         <Gallery
            images={images}
            models={models}
         />
      </div>
   )
}

export default Home
