import PostPreview from './post-preview';

export default function AllStories({ posts }) {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 md:col-gap-4 lg:col-gap-8 row-gap-5 md:row-gap-8 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt || null}
          />
        ))}
      </div>
    </section>
  );
}
