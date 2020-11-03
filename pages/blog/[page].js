import Container from '../../components/container';
import Layout from '../../components/layout';
import { getAllPostsForHome } from '../../lib/api';
import Head from 'next/head';
import { BLOG_NAME } from '../../lib/constants';
import AllStories from '../../components/all-stories';
import Header from '../../components/header';
import Pagination from '../../components/pagination';

export default function Blog({ preview, items, limit, total, page, skip }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <Container>
          <Header title='Blog' description='Artículos de teología y más' />
          {items && (
            <>
              <AllStories posts={items} />
              <Pagination limit={limit} total={total} page={page} skip={skip} />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } },
      { params: { page: '4' } },
      { params: { page: '5' } },
      { params: { page: '6' } },
      { params: { page: '7' } },
      { params: { page: '8' } },
      { params: { page: '9' } },
      { params: { page: '10' } },
    ],
    fallback: true,
  };
}

const PAGE_LIMIT = 30;

export async function getStaticProps({ params, preview = false }) {
  const { page = 1 } = params;
  const skip = (Number(page) - 1) * PAGE_LIMIT;
  const allPosts = await getAllPostsForHome(skip, PAGE_LIMIT, preview);
  return {
    props: { page, preview, ...allPosts },
  };
}
