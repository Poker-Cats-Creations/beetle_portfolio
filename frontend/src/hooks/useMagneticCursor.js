import { useEffect } from 'react'

export const useMagneticCursor = (handleMouseEnter, handleMouseLeave) => {
   useEffect(() => {
      const container = document.querySelector('.magnetic-container')
      const links = document.querySelectorAll('.magnetic-link')

      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      // links.forEach((link) => {
      //    link.addEventListener('mouseenter', handleMouseEnter)
      //    link.addEventListener('mouseleave', handleMouseLeave)
      // })

      return () => {
         links.forEach((link) => {
            container.removeEventListener('mouseenter', handleMouseEnter)
            link.removeEventListener('mouseenter', handleMouseEnter)
            link.removeEventListener('mouseleave', handleMouseLeave)
         })
      }
   }, [handleMouseEnter, handleMouseLeave])
}
