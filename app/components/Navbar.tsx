'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const navbarOpenClassName =
    'absolute outline outline-1 outline-gray-200 fixed top-14 right-3 max-h-full overflow-hidden z-10 bg-white w-max  rounded-md px-2 md:top-20 md:right-6';
  const navbarClosedClassName = 'fixed  bottom-0 max-h-full overflow-hidden z-10 bg-gray w-0';

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
              href='/area'
              className='text-gray-600 hover:text-green-500 active:text-green-700 text-lg font-semibold transition duration-100'
            >
              Locations
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
            {!navbarOpen ? (
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
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z' />
              </svg>
            )}
            Menu
          </button>
          <ul className={`${navbarOpen ? navbarOpenClassName : navbarClosedClassName}`}>
            <li>
              <div className='border-b'>
                <div className='flex justify-between text-black hover:text-green-500 active:text-green-600 cursor-pointer gap-2 py-4'>
                  <span className='md:text-lg font-semibold transition duration-100'>
                    <Link
                      onClick={handleToggle}
                      href='/'
                    >
                      Home
                    </Link>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className='border-b'>
                <div className='flex justify-between text-black hover:text-green-500 active:text-green-600 cursor-pointer gap-2 py-4'>
                  <span className='md:text-lg font-semibold transition duration-100'>
                    <Link
                      onClick={handleToggle}
                      href='/categories'
                    >
                      Categories
                    </Link>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className='border-b'>
                <div className='flex justify-between text-black hover:text-green-500 active:text-green-600 cursor-pointer gap-2 py-4'>
                  <span className='md:text-lg font-semibold transition duration-100'>
                    <Link
                      onClick={handleToggle}
                      href='/area'
                    >
                      Locations
                    </Link>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className=''>
                <div className='flex justify-between text-black hover:text-green-500 active:text-green-600 cursor-pointer gap-2 py-4'>
                  <span className='md:text-lg font-semibold transition duration-100'>
                    <Link
                      onClick={handleToggle}
                      href='/random'
                    >
                      Random
                    </Link>
                  </span>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- buttons - end --> */}
        </header>
      </div>
    </div>
  );
}
