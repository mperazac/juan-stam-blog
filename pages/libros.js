import Container from '../components/container';
import Layout from '../components/layout';
import { getAllBooks } from '../lib/api';
import Head from 'next/head';
import { BLOG_NAME } from '../lib/constants';
import Header from '../components/header';
import AllBooks from '../components/all-books';

export default function Libros({ preview, items }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <Container>
          <Header title='Libros' description='' />
          {items && (
            <>
              <AllBooks items={items} />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const items = await getAllBooks(preview);
  return {
    props: { preview, items },
  };
}
