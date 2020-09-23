import Link from 'next/link';
import { BLOG_NAME } from '../lib/constants';

export default function Menu() {
  return (
    <div className='mt-0 fixed w-full z-10 top-0 body-font shadow-md text-black bg-white'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
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
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href='/sobre-juan-stam'>
            <a className='mr-5 hover:text-gray-900'>Acerca</a>
          </Link>
          <Link href='/blog/1'>
            <a className='mr-5 hover:text-gray-900'>Blog</a>
          </Link>
          <Link href='/contacto'>
            <a className='mr-5 hover:text-gray-900'>Contacto</a>
          </Link>
        </nav>
        <div className='relative'>
          <div className='absolute flex border border-transparent left-0 top-0 h-full w-10'>
            <div className='flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
          </div>

          <input
            id='search'
            name='search'
            type='text'
            placeholder='Buscar'
            value=''
            className='text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12'
          />
        </div>
      </div>
    </div>
  );
}
