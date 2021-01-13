import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import markdownStyles from './markdown-styles.module.css';

export default function Book({ title, description, cover, links }) {
  const bookLinks = Object.keys(links).map(function (k) {
    return links[k];
  });
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
        <h3 className="text-xl font-semibold ">Adquiérelo en:</h3>
        <div className='my-4 space-x-3 space-y-3'>
          {bookLinks.map((bookLink, index) => (
            <Link href={bookLink.link} key={index}>
              <a
                className='inline-block px-6 py-2 bg-golden-1 text-lg leading-6 text-white text-center rounded shadow transition hover:shadow-lg focus:outline-none hover:bg-opacity-75'
                target='_blank'
              >
                {bookLink.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
