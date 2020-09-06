import DateComponent from './date';

export default function Comments({ comments }) {
  return (
    <section>
      <div className=''>
        {comments.map((comment, index) => (
          <div className='mb-10' key={index}>
            <p className='text-xl'>{comment.name}</p>
            <p className='text-sm text-gray-600 mb-3'>
              <DateComponent dateString={comment.date} />
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
