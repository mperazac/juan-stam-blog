import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Pagination({ limit, total, page, skip }) {
  const showPreviousPage = page != 1;
  const showNextPage = page != total / (skip + 1);

  const router = useRouter();

  const handlePageClick = ({ selected }) => {
    const pageSelected = Number(selected) + 1;
    router.push(`/blog/${pageSelected}`);
  };

  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        {showPreviousPage && (
          <Link href={`/blog/${Number(page) - 1}`}>
            <a
              className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
            >
              Anterior
            </a>
          </Link>
        )}
        {showNextPage && (
          <Link href={`/blog/${Number(page) + 1}`}>
            <a
              className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
            >
              Siguiente
            </a>
          </Link>
        )}
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm leading-5 text-gray-700'>
            Mostrando
            <span className='font-medium mx-1'>{(skip + 1)}</span>a
            <span className='font-medium mx-1'>{skip + limit}</span>
            de
            <span className='font-medium mx-1'>{total}</span>
            artículos
          </p>
        </div>
        <div>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={total / limit}
            marginPagesDisplayed={2}
            initialPage={Number(page) - 1}
            disableInitialCallback={true}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={
              'relative z-0 inline-flex shadow-sm text-gray-700'
            }
            previousClassName={
              'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
            }
            nextClassName={
              '-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
            }
            pageClassName={
              '-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium  hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
            }
            breakLinkClassName={
              '-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700'
            }
            subContainerClassName={'pages pagination'}
            activeClassName={'bg-blue-400 text-white'}
          />
        </div>
      </div>
    </div>
  );
}
