'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className='bg-white pb-1 sm:pb-2 lg:pb-3'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <header className='flex justify-between items-center py-4 md:py-8 mb-4 md:mb-6 xl:mb-8'>
          {/* <!-- logo - start --> */}
          <Link
            href='/'
            className='hover:text-green-500 active:text-green-700 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
            aria-label='logo'
          >
            FoodHaus
          </Link>
          {/* <!-- logo - end --> */}

          {/* <!-- nav - start --> */}
          <nav className='hidden lg:flex gap-12'>
            <Link
              href='/categories'
              className='text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100'
            >
              Categories
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100'
            >
              Ingredients
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100'
            >
              Area
            </Link>
            <Link
              href='/random'
              className='text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100'
            >
              Random
            </Link>
          </nav>
          {/* <!-- nav - end --> */}
          {/* search start */}

          {/* search end */}
          {/* <!-- buttons - start --> */}

          <button
            onClick={handleToggle}
            type='button'
            className='z-20 inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-green-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
            Menu
          </button>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <button>Close</button>
            <li>
              <a href='/random'>Random Recipe</a>
            </li>
            <li>menu item</li>
            <li>menu item</li>
          </ul>
          {/* <!-- buttons - end --> */}
        </header>
      </div>
    </div>
  );
}
