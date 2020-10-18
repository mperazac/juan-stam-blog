import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Search(props) {
  const { isOpen } = props;
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && value.length > 0) {
      router.push({
        pathname: '/busqueda',
        query: { q: value },
      });
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseLeave = () => {
    setValue('');
  };

  return (
    <>
      <div
        className={`${
          !isOpen ? 'hidden md:block' : ''
        } relative mt-2 mx-auto md:m-0`}
      >
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
          value={value}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          onBlur={handleMouseLeave}
          className='text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12'
        />
      </div>
    </>
  );
}
