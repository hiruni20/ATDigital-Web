import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className='bg-purple text-white mt-8 md-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
        <div className='flex items-center mb-4'>
      <span>
        <img src={logo} alt='Logo' className='h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 mr-2' />
      </span>
      <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>AT-DIGITAL</h1>
    </div>
          <p className='text-sm'>
            Your goal is our target. Not anything in between.
            We use online marketing platforms and tools to achieve a single objective - your business results.
          </p>
        </div>

        <div className='text-white'>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0 font-semibold'>Our Technologies</h1>
          <nav className='flex flex-col gap-2'>
            <h2 className='hover:text-black transition-all cursor-pointer'>React</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Gatsby</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>NextJS</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>NodeJS</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>GraphQL</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Laravel</h2>
          </nav>
        </div>
        <div className='text-white'>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0 font-semibold'>Our Services</h1>
          <nav className='flex flex-col gap-2'>
            <h2 className='hover:text-black transition-all cursor-pointer'>Social media Marketing</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Web & Mobile App Development</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Data & Analytics</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Google Marketing solutions</h2>
            <h2 className='hover:text-black transition-all cursor-pointer'>Search Engine Optimization</h2>
          </nav>
        </div>
      </div>
      <hr className="border-white w-2/4 mx-auto" />
      <div className="text-center py-4">
        <p>
          <span className='text-white'>Privacy Policy | Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

