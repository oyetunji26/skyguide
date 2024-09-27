import React from 'react'
import AboutUs from '@/components/AboutUs'
import Mission from '@/components/Mission'
import HowWeHelp from '@/components/About/HowWeHelp';
import { RiMapPinLine, RiCloudyLine, RiErrorWarningLine, RiInformationLine, RiUserLine } from 'react-icons/ri';
import { DivIcon } from 'leaflet';
const page = () => {
  return (
    <div className='section'>
      <div className="mt-10 mb-10">
        <h2 className="my-2 font-bold flex justify-center  md:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px]">
        Welcome to SkyGuide
        </h2>
        <p className="flex justify-center text-[#444]">
        Your Trusted Paragliding Companion
        </p>
      </div>

      <div className="text-lg my-3 text-justify text-[#444] grid grid-cols-[1fr__2fr] gap-6 items-center">
        <div className=''>
          <img src='/paraglide1.jpg' className='object-cover rounded-tr-xl rounded-tl-md rounded-br-md rounded-bl-2xl min-w-full h-[400px]'/>
          {/* <video className='w-full h-[400px]' autoPlay controls>
            <source src='/paraglide.mp4' type='video/mp4' />
          </video> */}
        </div>

        <div>
          {/* <h1 className=" font-bold mb-4 text-2xl text-center">Welcome to SkyGuide: Your Trusted Paragliding Companion</h1> */}
          <p className="text-lg my-6">At SkyGuide, we're passionate about empowering paragliders to soar safely and confidently. Our team of experienced paragliders, meteorologists, and developers created the SkyGuide app to revolutionize the way you plan and navigate your flights.</p>
          <p className='text-lg my-6'>
          SkyGuide is dedicated to providing the most comprehensive and accurate information to help paragliders make informed decisions about their flying experiences. We believe that safety and enjoyment go hand-in-hand, and our app is designed to ensure that every flight is a successful and exhilarating experience.
          </p>
        </div>
      </div>

      <div className='section my-10 flex flex-col gap-4'>
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Team</h2>
        <div className="flex flex-wrap mb-6 justify-between">
          <div className="">
            <div className='grid place-items-center'>
              <img src="https://via.placeholder.com/150" alt="Founder and Lead Developer" className="rounded-full mb-2" />
            </div>
            <h3 className="text-lg font-bold mb-1">[Name], Founder and Lead Developer</h3>
            <p className="text-sm">Experienced paraglider and software engineer</p>
          </div>
          <div className="">
            <div className='grid place-items-center'>
              <img src="https://via.placeholder.com/150" alt="Founder and Lead Developer" className="rounded-full mb-2" />
            </div>
            <h3 className="text-lg font-bold mb-1">[Name], Founder and Lead Developer</h3>
            <p className="text-sm">Experienced paraglider and software engineer</p>
          </div>
          <div className="">
            <div className='grid place-items-center'>
              <img src="https://via.placeholder.com/150" alt="Founder and Lead Developer" className="rounded-full mb-2" />
            </div>
            <h3 className="text-lg font-bold mb-1">[Name], Founder and Lead Developer</h3>
            <p className="text-sm">Experienced paraglider and software engineer</p>
          </div>

        </div>
      </div>

      {/* <Mission /> */}
      <HowWeHelp />


      {/* <AboutUs/> */}
    </div>
  )
}

export default page