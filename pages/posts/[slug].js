import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import {
  getAllPostsWithSlug,
  getPostAndMorePostsAndComments,
} from '../../lib/api';
import PostTitle from '../../components/post-title';
import { BLOG_NAME } from '../../lib/constants';
import Comments from '../../components/comments';
import LeaveAComment from '../../components/leave-a-comment';

export default function Post({ post, comments, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <div className='max-w-4xl mx-auto'>
              <article>
                <Head>
                  <title>
                    {post.title} | {BLOG_NAME}
                  </title>
                  <meta property='og:image' content={post.coverImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  excerpt={post.excerpt || null}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {comments && comments.length > 0 && (
                <Comments comments={comments} />
              )}
              <SectionSeparator />
              <LeaveAComment entryId={post.id} title={post.title} />
            </div>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePostsAndComments(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      comments: data?.comments ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
