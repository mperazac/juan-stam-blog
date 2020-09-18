import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Header from '../components/header';
import { BLOG_NAME } from '../lib/constants';

function Contact({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME} - Artículos de teología y más</title>
        </Head>
        <Container>
          <section className='body-font relative'>
            <div className='container px-5 mx-auto'>
              <Header title='Contáctenos' />
              <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                <div className='flex flex-wrap -m-2'>
                  <div className='p-2 w-1/2'>
                    <input
                      className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2'
                      placeholder='Nombre'
                      type='text'
                    />
                  </div>
                  <div className='p-2 w-1/2'>
                    <input
                      className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2'
                      placeholder='Email'
                      type='email'
                    />
                  </div>
                  <div className='p-2 w-full'>
                    <textarea
                      className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-blue-500 text-base px-4 py-2 resize-none block'
                      placeholder='Mensaje'
                    ></textarea>
                  </div>
                  <div className='p-2 w-full'>
                    <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Contact;
