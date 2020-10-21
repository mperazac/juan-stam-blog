import Container from '../../components/container';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import AllStories from '../../components/all-stories';
import Header from '../../components/header';
import { BLOG_NAME } from '../../lib/constants';
import { useRouter } from 'next/router';
import Pagination from '../../components/pagination';

export default function Busqueda({ preview }) {
  const [data, setData] = useState();
  const router = useRouter();

  const searchEndpoint = (query, page, preview) =>
    `/api/search?q=${query}&page=${page}&preview=${preview}`;

  useEffect(() => {
    async function fetchData() {
      const results = await (
        await fetch(searchEndpoint(router.query.q, router.query.page, preview))
      ).json();
      setData(results);
    }
    if (router.query.q && router.query.q.length) {
      fetchData();
    } else {
      setData(undefined);
    }
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME} - Artículos de teología y más</title>
      </Head>
      <Container>
        <Header title='Blog' description='Artículos de teología y más' />
        {data?.items.length > 0 && (
          <>
            <p>
              Artículos de blog que incluyen: &quot;{router.query.q}
              &quot;
            </p>
            <AllStories posts={data.items} />
            <Pagination
              pageName='busqueda'
              limit={data.limit}
              total={data.total}
              page={data.page}
              skip={data.skip}
            />
          </>
        )}
        {!data?.items && (
          <>
            <p>
              No se encontraron resultados para &quot;{router.query.q}&quot;
            </p>
          </>
        )}
      </Container>
    </Layout>
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

export async function getStaticProps(preview = false) {
  return {
    props: { preview },
  };
}
