import React from 'react'
import { Button } from '../ui/button'

const Cta = () => {
  return (
    <div className="bg-[#101218]">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-[#30303B] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                {/* <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="#4D5160" />
                    <stop offset="1" stop-color="#3d617b" />
                </radialGradient>
                </defs> */}
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white">List Your Business. Get Discovered!</h2>
                <p className="mt-6 text-base/7 text-pretty text-white">Join thousands of businesses and connect with local customers effortlessly. List your services, attract more clients, and grow your business!</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button className='text-white bg-[#0092FF] hover:bg-[#096FBD] rounded-lg px-3 font-semibold'>Get started</Button>
                <Button className='text-white hover:text-[#0092FF] bg-transparet hover:bg-transparet rounded-lg px-3 font-semibold shadow-none'>Learn more <span aria-hidden="true">→</span></Button>
                {/* <a href="#" className="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a> */}
                </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
                <img className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="/images/barber.jpg" alt="App screenshot" width="1824" height="1080" />
            </div>
            </div>
        </div>
        </div>

  )
}

export default Cta