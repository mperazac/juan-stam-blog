import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import markdownStyles from './markdown-styles.module.css';

export default function Book({ title, description, cover, storeLink }) {
  return (
    <div className='md:flex mx-6 md:mx-auto my-20 max-h-16 '>
      <img
        className='h-full w-full md:w-1/4  object-contain rounded pb-5/6 max-h-2'
        src={cover.fields.file.url}
        alt='bag'
      />
      <div className='w-full md:w-2/3 md:px-8 py-4 bg-white rounded-lg'>
        <div className='flex items-center'>
          <h2 className='text-2xl text-gray-800 font-bold mr-auto'>{title}</h2>
        </div>
        <p className='mt-4'>
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(description)}
          </div>
        </p>
        <div className='flex items-center justify-end mt-4 top-auto'>
          <Link href={storeLink}>
            <a
              className='float-right text-white bg-golden-1 hover:bg-opacity-75 border-0 py-2 px-8 focus:outline-none rounded text-lg'
              target='_blank'
            >
              Comprar en Amazon
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
