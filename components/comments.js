import DateComponent from './date';

export default function Comments({ comments }) {
  return (
    <section>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8'>
        Comentarios
      </h2>
      <div>
        {comments.map((comment, index) => (
          <div className='mb-10 p-2 border-solid border-2 border-gray-200' key={index}>
            <p className='text-xl font-bold'>{comment.name}</p>
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
