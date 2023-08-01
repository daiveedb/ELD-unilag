import Image from 'next/image'
import React from 'react'
import { socialLinks } from './homedata'
import HomeSocialIcon from './HomeSocialIcon'

const HomeWCW = () => {
  return (
    <div className='my-16 font-satoshi'>
        <div className='flex flex-col md:flex-row justify-between items-center h-max'>
            <div className='flex-1 w-full h-full border-r-2 border-black py-20 pl-10 lg:pl-[15%]'>
                <div className='flex items-center mb-16'>
                    <h2 className='text-5xl font-bold font-satoshi pr-7'>W.C.W</h2>
                    <Image width={50} height={50} src="/images/homeImages/Books.svg" alt='books svg'/>
                </div>
                <div className='mb-10'>
                    <h4 className='uppercase tracking-[0.15em] text-xl font-thin pb-3'>This Week's</h4>
                    <h2 className='text-4xl font-semibold capitalize pb-8'>Woman In Engineering</h2>
                    <p className='text-[#4B4B4B] font-light tracking-wide text-lg w-[80%]'>Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.</p>
                </div>
                <div className='w-[250px] flex justify-between items-center'>
                    {socialLinks.map((link)=>{
                        return <HomeSocialIcon props={link}/>
                    })}
                </div>
            </div>
            <div className='flex-1 bg-headerPink h-full w-full border-l-2 py-20 pl-10 lg:pl-[15%] border-black'>
                IMAGE
            </div>
        </div>
    </div>
  )
}

export default HomeWCW