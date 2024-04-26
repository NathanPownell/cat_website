import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <div className='mb-12 text-center flex flex-col items-center'>
        <Image src="/bon.gif" alt="bon" width={500} height={500} />
        <h2 className='text-2xl font-bold'>We&apos;re a CTO.</h2>
        <p>
            We formed after the left-wing libtard jeet dev left the project in shambles.
            <br />
            <br />
             We worked our asses off to rebuild it.
            <br />
            <br />
            Now that the jeets are out, we&apos;re running free and we will not be stopped.
            <br />
            <br />
            <b>Facts don&apos;t care about your feelings.</b>
        </p>
    </div>
  )
}

export default Content