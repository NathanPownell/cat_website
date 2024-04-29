import React from 'react'
import { Video } from './video'
import { Button } from './ui/button'
import Container from './container'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className='w-full justify-evenly py-12 flex flex-col-reverse px-4 gap-4 bg-center bg-cover md:flex-row bg-center bg-cover md:flex-row bg-hero-background'>

        <div className='flex w-54 gap-2 flex-col justify-center text-black'>

        <h1 className='text-4xl font-bold'>BON SHATIRO</h1>
        <h3 className='text-lg'>Facts don&apos;t care about your feelings.</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w w-full md:w-auto mt-2">Let&apos;s go</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2 p-2">
            <Button className='border-slate-800' asChild variant="outline" size="sm">
                <Link
                  href="https://birdeye.so/token/6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW?chain=solana"
                  target="_blank"
                >
                  Buy on Birdeye &nbsp; <ExternalLinkIcon size="14" />
                </Link>
              </Button>
              <Button asChild className='border-slate-800' variant="outline" size="sm">
                <Link href="https://t.co/gezdnpxrHC" target="_blank">
                  Join Telegram &nbsp; <ExternalLinkIcon size="14" />{" "}
                </Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        </div>
        <div>
            <Video />
        </div>
    </div>
  )
}

export default Hero