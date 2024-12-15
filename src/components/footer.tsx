import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center text-center p-4 bg-muted'>
              <Image src="/Fart.gif" alt="fart" width={200} height={200} />
        <h2 className='text-2xl font-bold'>$FRTCAT</h2>
        <p className='text-md'></p>
        <p className='text-md'>&copy; 2024 Fart Cat </p>
    </div>
  )
}

export default Footer