import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <div className='mb-12 text-center flex flex-col h-96 justify-end items-center'>
        <Image src="/bon.gif" alt="bon" width={500} height={500} />
        <h2 className='text-2xl font-bold'>Facts, b*tch.</h2>
    </div>
  )
}

export default Content