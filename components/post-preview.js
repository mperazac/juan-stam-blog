import Link from 'next/link';
import DateComponent from '../components/date';
import CoverImage from './cover-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className='hover:shadow-md p-6'>
      <div className='mb-5'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className='text-2xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a>{title}</a>
        </Link>
      </h3>
      <div className='text-sm mb-4 text-gray-700 '>
        <DateComponent dateString={date} />
      </div>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <p className='text-base leading-relaxed mb-4 text-gray-700 cursor-pointer'>
          <a>{excerpt}</a>
        </p>
      </Link>
    </div>
  );
}
