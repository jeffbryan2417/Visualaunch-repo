import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between
        items-center py-4 px-6 md:px-20 lg:px-32'> 
            <img src={assets.logo} alt="" />
            <ul>
                <a href="#Header" className='cursor-pointer hover:text-[#070707]'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-[#070707]'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-[#070707]'>Porfolio</a>
                <a href="#Header" className='cursor-pointer hover:text-[#070707]'>Service</a>               
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar   