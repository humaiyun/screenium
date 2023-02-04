import React from 'react'

const Footer = () => {
    // TODO: Add href to all links
  return (
    <div className='flex flex-col bg-[#303461] h-80 px-16 py-10'>
        <div className='grid grid-cols-4'>
            <div>
                <img className=" object-cover object-center pointer-events-none w-36" alt="the movie database" loading='lazy' src="/assets/tmdb.svg" />
            </div>
            <div>
                <ul>
                    <li className='font-bold'>ABOUT</li>
                    <li className='font-light py-1'>Community Guidlines</li>
                    <li className='font-light py-1'>FAQ</li>
                    <li className='font-light py-1'>Support</li>
                    <li className='font-light py-1'>System Status</li>
                    <li className='font-light py-1'>Statistics</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold'>INFORMATION</li>
                    <li className='font-light py-1'>About Us</li>
                    <li className='font-light py-1'>Careers</li>
                    <li className='font-light py-1'>Advertising</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold'>LEGAL</li>
                    <li className='font-light py-1'>Terms and Conditions</li>
                    <li className='font-light py-1'>Privacy Policy</li>
                    <li className='font-light py-1'>Cookies Policy</li>
                </ul>
            </div>
        </div>
        <p className='text-center text-md mt-8 opacity-50 dark:text-gray-400 dark:opacity-100'>
            &copy; {new Date().getFullYear()} - All rights reserved.
        </p>
    </div>
  )
}

export default Footer