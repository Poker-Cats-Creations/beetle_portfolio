import React, { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ImagesGallery = ({ images }) => {

   if (loadingError) {
      return <p>Model not found</p>
   }

   return (
      <React.Fragment>
         {images.map((image, index) => (
            <Model
               key={index}
               modelPath={image.path}
            />
         ))}
      </React.Fragment>
   )
}

export default ImagesGallery
