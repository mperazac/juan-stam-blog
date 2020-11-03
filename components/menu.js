import Link from 'next/link';
import { useState } from 'react';
import { BLOG_NAME } from '../lib/constants';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerEvent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='mt-0 fixed w-full z-10 top-0 body-font shadow-md text-black bg-white'>
      <div className='container mx-auto flex flex-wrap justify-between p-5 md:flex-row items-center'>
        <a
          className='flex title-font font-medium items-center text-gray-900 md:mb-0'
          href='/'
        >
          <svg
            className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            ></path>
          </svg>
          <span className='ml-3 text-xl'>{BLOG_NAME}</span>
        </a>
        <div className='block md:hidden'>
          <button
            id='hamburger-menu'
            onClick={handleHamburgerEvent}
            className='px-4 cursor-pointer'
          >
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              {!isOpen && (
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              )}
              {isOpen && (
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              )}
            </svg>
          </button>
        </div>

        <div className='w-full flex-grow md:flex md:items-center md:w-auto'>
          <nav
            className={`${
              !isOpen ? 'hidden' : ''
            } md:block md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex-grow text-base`}
          >
            <Link href='/sobre-juan-stam'>
              <a className='block text-right md:inline-block mr-5 hover:text-gray-900'>
                Acerca
              </a>
            </Link>
            <Link href='/blog/1'>
              <a className='block text-right md:inline-block mr-5 hover:text-gray-900'>
                Blog
              </a>
            </Link>
            <Link href='/contacto'>
              <a className='block text-right md:inline-block mr-5 hover:text-gray-900'>
                Contacto
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
