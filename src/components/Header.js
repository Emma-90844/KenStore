// import React from 'react';
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex rounded-md items-center h-10  bg-yellow-400 flex flex-grow cursor-pointer hover:bg-yellow-500 ">
          <input
            type="text"
            className="flex-grow h-full p-2 w-6 flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Divs */}
        <div className='text-white flex  items-center text-xs space-x-6 mx-6 whitespace-nowrap '>
          <div className='link cursor-pointer hover:underline'>
            <p>Hello Emmy One</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link cursor-pointer hover:underline'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'> & Orders</p>

          </div>
          <div className=' relative link flex items-center  cursor-pointer hover:underline '>
            <span className='absolute top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
             <ShoppingCartIcon className='h-10'/>
             <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>

  
      </div>
      {/* Bottom Nav */}
      <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light  text-white text-sm '>
          <p className='flex items-center cursor-pointer hover:underline'>
            <MenuIcon className='h-6 mr-1 '/>
            All
          </p>
          <p className='cursor-pointer hover:underline' >Prime Video</p>
          <p className='cursor-pointer hover:underline' >Kent Business</p>
          <p className='cursor-pointer hover:underline' >Todays Deals</p>
          <p className='cursor-pointer hover:underline' >Reach Us</p>
          <p className='cursor-pointer hover:underline hidden lg:inline-flex' >Electronics</p>
          <p className='cursor-pointer hover:underline hidden lg:inline-flex' >Reach Us</p>
           

        </div>
    </header>
  );
}

export default Header;
