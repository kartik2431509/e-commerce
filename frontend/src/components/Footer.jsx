import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between gap-14 my-10 mt-40 text-sm'>
          <div>
            <img src={assets.logo} className='mb-5 w-28' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit eveniet maxime accusantium, et, veniam minima atque, blanditiis ratione nulla suscipit ipsa dolores iure asperiores laboriosam sequi voluptatibus corrupti voluptas explicabo!</p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-34-55</li>
                <li>contact@forevergmail.com</li>
            </ul>
          </div>
          
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
