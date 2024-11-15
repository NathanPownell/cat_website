import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center text-center p-4 bg-muted'>
              <Image src="/bon.gif" alt="bon" width={500} height={500} />
        <h2 className='text-2xl font-bold'>Facts, b*tch.</h2>
        <p className='text-md'>Not affiliated with Ben Shapiro or the Daily Wire.</p>
        <p className='text-md'>&copy; 2024 Bon Shatiro </p>
    </div>
  )
}

export default Footer