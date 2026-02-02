'use client'
import { Image, PerspectiveCamera } from '@react-three/drei'

export default function Background() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={90} />

      <Image 
        url="/images/facephoto.png" 
        transparent
        opacity={1}
        // Centered position. 
        // We push it slightly up (0.5) so it looks good on the first "blank" screen.
        position={[0, 0.5, 0]}
        scale={[5, 6]} 
      />
    </>
  )
}