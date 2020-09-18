import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { BLOG_NAME } from '../lib/constants';
import AllStories from '../components/all-stories';
import Header from '../components/header';

export default function Blog({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <Container>
          <Header title="Blog" description="Artículos de teología y más" />
          <AllStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { preview, allPosts },
  };
}
