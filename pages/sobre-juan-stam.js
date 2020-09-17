import Head from 'next/head';
import Container from '../components/container';
import Header from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAuthor } from '../lib/api';
import { BLOG_NAME } from '../lib/constants';

function Autor(props) {
  return (
    <Layout preview={props.preview}>
      <Container>
        <Header />
        <article>
          <Head>
            <title>{BLOG_NAME} - Artículos de teología y más</title>
            <meta property='og:image' content={props.picture} />
          </Head>
          <Intro />
          <h1>{props.name}</h1>
          <p>{props.biography}</p>
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAuthor(preview);
  return {
    props: {
      preview,
      ...data,
    },
  };
}

export default Autor;
