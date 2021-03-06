import { BLOG_NAME } from '../lib/constants';

export default function Footer() {
  return (
    <>
      {/* <hr className='border-accent-2' /> */}
      <footer className='text-gray-700 body-font bg-gray-100 border-t border-gray-300'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <svg
              className='w-10 h-10 text-white p-2 rounded-full bg-golden-1'
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
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © {new Date().getFullYear()} — Costa Rica
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a
              className='text-gray-500'
              href='https://www.facebook.com/Juan-Stam-279604902122567'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://www.amazon.com/-/es/Juan-B.-Stam/e/B001KHMUW8'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='currentColor'
                className='w-5 h-5'
                viewBox='0 0 1100 1000'
              >
                <path d='M2 776c3.333-5.333 8.666-5.667 16-1 166.666 96.667 348 145 544 145 130.666 0 259.666-24.333 387-73 3.333-1.333 8.166-3.333 14.5-6 6.333-2.667 10.833-4.667 13.5-6 10-4 17.833-2 23.5 6 5.666 8 3.833 15.333-5.5 22-12 8.667-27.334 18.667-46 30-57.334 34-121.334 60.333-192 79-70.667 18.667-139.667 28-207 28-104 0-202.334-18.167-295-54.5C162.333 909.167 79.333 858 6 792c-4-3.333-6-6.667-6-10 0-2 .666-4 2-6zm301-285c0-46 11.333-85.333 34-118 22.666-32.667 53.666-57.333 93-74 36-15.333 80.333-26.333 133-33 18-2 47.333-4.667 88-8v-17c0-42.667-4.667-71.333-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26.334 28.667-31 50c-2.667 13.333-9.334 21-20 23l-115-14c-11.334-2.667-17-8.667-17-18 0-2 .333-4.333 1-7 11.333-59.333 39.166-103.333 83.5-132C451.833 19.333 503.666 3.333 563 0h25c76 0 135.333 19.667 178 59a190.52 190.52 0 0 1 18.5 21.5c5.666 7.667 10.166 14.5 13.5 20.5 3.333 6 6.333 14.667 9 26 2.666 11.333 4.666 19.167 6 23.5 1.333 4.333 2.333 13.667 3 28 .666 14.333 1 22.833 1 25.5v242c0 17.333 2.5 33.167 7.5 47.5s9.833 24.667 14.5 31c4.666 6.333 12.333 16.5 23 30.5 4 6 6 11.333 6 16 0 5.333-2.667 10-8 14-55.334 48-85.334 74-90 78-8 6-17.667 6.667-29 2-9.334-8-17.5-15.667-24.5-23s-12-12.667-15-16-7.834-9.833-14.5-19.5c-6.667-9.667-11.334-16.167-14-19.5-37.334 40.667-74 66-110 76-22.667 6.667-50.667 10-84 10-51.334 0-93.5-15.833-126.5-47.5S303 549 303 491zm172-20c0 26 6.5 46.833 19.5 62.5S525 557 547 557c2 0 4.833-.333 8.5-1 3.666-.667 6.166-1 7.5-1 28-7.333 49.666-25.333 65-54 7.333-12.667 12.833-26.5 16.5-41.5 3.666-15 5.666-27.167 6-36.5.333-9.333.5-24.667.5-46v-25c-38.667 0-68 2.667-88 8-58.667 16.667-88 53.667-88 111zm420 322c1.333-2.667 3.333-5.333 6-8 16.666-11.333 32.666-19 48-23 25.333-6.667 50-10.333 74-11 6.666-.667 13-.333 19 1 30 2.667 48 7.667 54 15 2.666 4 4 10 4 18v7c0 23.333-6.334 50.833-19 82.5-12.667 31.667-30.334 57.167-53 76.5-3.334 2.667-6.334 4-9 4-1.334 0-2.667-.333-4-1-4-2-5-5.667-3-11 24.666-58 37-98.333 37-121 0-7.333-1.334-12.667-4-16-6.667-8-25.334-12-56-12-11.334 0-24.667.667-40 2-16.667 2-32 4-46 6-4 0-6.667-.667-8-2-1.334-1.333-1.667-2.667-1-4 0-.667.333-1.667 1-3z' />
              </svg>
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://www.youtube.com/results?search_query=juan+stam'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='currentColor'
                className='w-5 h-5'
                viewBox='0 .03 2498 2502.47'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='m0 1864.11v.11c1.5 55.5 2 111.32 11.32 166.47 9.92 58.35 24.1 115.25 51.15 168.21q54.86 107.52 150.21 181.66c45.52 35.5 95.25 63.69 150.3 81.47 80.26 25.89 163.07 35.81 247.09 36.3 52.42.33 104.81 1.64 157.25 1.42 380.82-1.6 761.65 2.75 1142.49-2.35 50.53-.68 100.24-6.85 149.84-15.92 95.06-17.4 179.07-58 250.95-122.09 83.77-74.71 140.29-166.16 165.81-276.52 16.69-72.14 20.87-145.32 21.58-218.77v-14.65c0-5.68-2.16-1247.91-2.36-1264.33-.55-45.1-3.88-89.87-12.33-134.25-10.29-54.08-24.82-106.78-50.71-155.7-27.35-51.7-61.6-98.17-104-138.79-64.89-62.23-139.78-106.23-227-129.51-78.74-21-159.07-25.68-240-25.6a2.45 2.45 0 0 1 -.45-1.24h-1224.74c0 .42 0 .83-.07 1.24-45.93.84-91.92.49-137.61 6.16-50.05 6.22-99.63 15.59-147 33.09-74.62 27.6-139.46 70.59-194.84 128-62.75 65-107 140.22-130.44 227.79-20.95 78.13-25.51 157.81-25.62 238.06'
                  fill='#fff'
                />
                <path d='m0 .79h2498v2498h-2498z' fill='none' />
                <path d='m1293.24 1938.65-409.54-7.49c-132.6-2.61-265.53 2.6-395.53-24.44-197.76-40.4-211.77-238.49-226.43-404.65-20.2-233.6-12.38-471.44 25.74-703.09 21.52-129.98 106.21-207.54 237.18-215.98 442.12-30.63 887.18-27 1328.32-12.71 46.59 1.31 93.5 8.47 139.44 16.62 226.77 39.75 232.3 264.23 247 453.2 14.66 190.92 8.47 382.82-19.55 572.44-22.48 157-65.49 288.66-247 301.37-227.42 16.62-449.62 30-677.68 25.74.01-1.01-1.3-1.01-1.95-1.01zm-240.77-397.48c171.38-98.4 339.49-195.16 509.89-292.9-171.7-98.4-339.49-195.16-509.89-292.9z' />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
