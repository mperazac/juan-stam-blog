import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import { BLOG_NAME } from '../lib/constants';

function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <Container>
          <p>Future HOMEPAGE</p>
        </Container>
      </Layout>
    </>
  );
}

export default Index;
