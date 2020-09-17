import Link from 'next/link';
import { BLOG_NAME } from '../lib/constants';

export default function Header() {
  return (
    <div className='flex flex-wrap py-2'>
      <div className='w-full px-4 bg-black'>
        <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  rounded'>
          <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'>
              <a
                className='text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
                href='/'
              >
                {BLOG_NAME}
              </a>
              <button
                className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                type='button'
              >
                <span className='block relative w-6 h-px rounded-sm bg-white'></span>
                <span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
                <span className='block relative w-6 h-px rounded-sm bg-white mt-1'></span>
              </button>
            </div>
            <div
              className='flex lg:flex-grow items-center'
              id='example-navbar-info'
            >
              <ul className='flex flex-col lg:flex-row list-none ml-auto'>
                <li className='nav-item'>
                  <Link href='/blog'>
                    <a className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>
                      Blog
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/sobre-juan-stam'>
                    <a className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>
                      El autor
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/contacto'>
                    <a className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>
                      Contacto
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
