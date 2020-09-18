import Head from 'next/head';
import Container from '../components/container';
import markdownStyles from '../components/markdown-styles.module.css';
import Layout from '../components/layout';
import { getAuthor } from '../lib/api';
import { BLOG_NAME } from '../lib/constants';
import ReactMarkdown from 'react-markdown';

function Autor(props) {
  return (
    <Layout preview={props.preview}>
      <Container>
        <article>
          <Head>
            <title>{BLOG_NAME} - Artículos de teología y más</title>
            <meta property='og:image' content={props.picture} />
          </Head>
          <section className='body-font'>
            <div className='container py-12 mx-auto flex flex-col'>
              <div className='lg:w-4/6 mx-auto'>
                <div className='rounded-lg h-full overflow-hidden'>
                  <img
                    alt='content'
                    className='object-cover object-center h-full w-full'
                    src={props.picture2.url}
                  />
                </div>
                <div className='flex flex-col sm:flex-row mt-10'>
                  <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                    <div className='inline-flex items-center justify-center text-gray-400'>
                      <img
                        className='w-20 h-20 rounded-full object-cover'
                        src={props.picture.url}
                        alt={props.picture.name}
                      />
                    </div>
                    <div className='flex flex-col items-center text-center justify-center'>
                      <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                        {props.name}
                      </h2>
                      <div className='w-12 h-1 bg-blue-500 rounded mt-2 mb-4'></div>
                      <p className='text-base text-gray-600'>
                        <ReactMarkdown source={props.excerpt} />
                      </p>
                    </div>
                  </div>
                  <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                    <div className={markdownStyles['markdown']}>
                      <ReactMarkdown source={props.biography} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
