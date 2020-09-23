import Avatar from '../components/avatar';
import DateComponent from '../components/date';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, date, author, excerpt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p>{excerpt}</p>
      <div className='mb-6 text-gray-600 text-sm'>
          <DateComponent dateString={date} />
        </div>
      <div className='hidden md:block md:mb-12'>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className='mx-auto'>
        <div className='block md:hidden mb-6'>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        
      </div>
    </>
  );
}

{/* <div className='mb-8 md:mb-16 sm:mx-0'>
  <CoverImage title={title} url={coverImage.url} />
</div> */}
