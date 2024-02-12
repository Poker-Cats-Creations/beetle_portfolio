import React, { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ModelsGallery = ({ models }) => {
   const [loadingError, setLoadingError] = useState(false)

   const Model = ({ modelPath }) => {
      try {
         const gltf = useLoader(GLTFLoader, modelPath)
         return <primitive object={gltf.scene} />
      } catch (error) {
         setLoadingError(true)
         return null
      }
   }

   if (loadingError) {
      return <p>Model not found</p>
   }

   return (
      <React.Fragment>
         {models.map((model, index) => (
            <Model
               key={index}
               modelPath={model.path}
            />
         ))}
      </React.Fragment>
   )
}

export default ModelsGallery
