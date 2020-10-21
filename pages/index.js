import Head from 'next/head';
import Link from 'next/link';
import Alert from '../components/alert';
import AllStories from '../components/all-stories';
import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import Meta from '../components/meta';
import { getAllPostsForHome } from '../lib/api';
import { BLOG_NAME } from '../lib/constants';

function Index({ preview, allPosts }) {
  const { items } = allPosts;
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Menu />
      <main className='relative'>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <div className='bg-cover-1 mb-24'>
          <Container>
            <section className='text-gray-700 body-font'>
              <div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                  <div className='text-white font-sans leading-relaxed text-3xl px-8'>
                    <h3>
                      Encuentre gran variedad de artículos escritos por el
                      teólogo Juan Stam y otros autores invitados.
                    </h3>
                  </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                  <img
                    className='object-cover object-center rounded'
                    alt='hero'
                    src='/images/juan_stam.jpg'
                  />
                </div>
              </div>
            </section>
          </Container>
        </div>
        <Container>
          {/* <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='block w-5 h-5 text-gray-400 mb-4'
              viewBox='0 0 975.036 975.036'
            >
              <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
            </svg>
            <p className='font-sans mb-8 leading-relaxed italic text-xl'>
              De la cobardía que no se atreve a enfrentar nuevas verdades,
              <br />
              De la pereza que se conforma con medias verdades,
              <br />
              De la arrogancia que cree que conoce toda la verdad,
              <br />
              Buen Señor, líbranos.
            </p>
            <span className='text-gray-800 font-bold text-sm float-right'>
              Oración Keniana
            </span>
          </div> */}

          <Header title='Blog' description='Artículos más recientes' />
          {items && (
            <>
              <AllStories posts={items} />
              <div className='p-2 w-full'>
                <Link href='/blog/1'>
                  <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                    Leer más
                  </button>
                </Link>
              </div>
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

const PAGE_LIMIT = 3;
const SKIP = 0;

export async function getStaticProps(preview = false) {
  const allPosts = await getAllPostsForHome(SKIP, PAGE_LIMIT, preview);
  return {
    props: { allPosts, preview },
  };
}

export default Index;
