import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Header from '../components/header';
import { BLOG_NAME } from '../lib/constants';
import { Field, Form, Formik } from 'formik';
import Recaptcha from 'react-recaptcha';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const CommentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Demasiado largo')
    .required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  message: Yup.string()
    .min(2, 'Muy corto')
    .max(50000, 'Demasiado largo')
    .required('Requerido'),
  recaptcha: Yup.string().required('Captcha is required'),
});

function Contact({ preview }) {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (values) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: values.name,
        email: values.email,
        mensaje: values.message,
      }),
    };
    try {
      const fetchResponse = await fetch(
        'https://formspree.io/f/mdopaezp',
        settings
      );
      const data = await fetchResponse.json();
      if (data.ok) {
        setIsDone(true);
      }
    } catch (e) {
      return e;
    }
  };

  const DisplayError = ({ error, touched }) => {
    if (!error || !touched) {
      return null;
    }
    return <div className='text-xs text-red-600 my-2'>{error}</div>;
  };

  const renderMessageSent = () => {
    return (
      <div className='text-center p-8 '>
        <h2 className='text-3xl text-green-600 font-semibold leading-12'>
          ¡Mensaje enviado!
        </h2>
        <p className='text-xl'>Pronto nos comunicaremos con usted.</p>
      </div>
    );
  };

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
              {isDone && renderMessageSent()}
              {!isDone && (
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    recaptcha: '',
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={CommentSchema}
                >
                  {({ errors, touched, setFieldValue, isSubmitting }) => (
                    <Form>
                      <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                        <div className='flex flex-wrap -m-2'>
                          <div className='p-2 w-1/2'>
                            <Field
                              id='name'
                              name='name'
                              placeholder='Nombre'
                              className='w-full rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2'
                            />
                            <DisplayError
                              error={errors.name}
                              touched={touched.name}
                            />
                          </div>
                          <div className='p-2 w-1/2'>
                            <Field
                              id='email'
                              name='email'
                              type='email'
                              placeholder='Correo electrónico'
                              className='w-full rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2'
                            />
                            <DisplayError
                              error={errors.email}
                              touched={touched.email}
                            />
                          </div>
                          <div className='p-2 w-full'>
                            <Field
                              name='message'
                              component='textarea'
                              placeholder='Escriba su mensaje'
                              className='w-full rounded border border-gray-400 focus:outline-none h-48 focus:border-blue-500 text-base px-4 py-2 resize-none block'
                            />
                            <DisplayError
                              error={errors.message}
                              touched={touched.message}
                            />
                          </div>
                          <div className='ml-2 my-6'>
                            <Recaptcha
                              sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPCHA}
                              render='explicit'
                              verifyCallback={(response) => {
                                setFieldValue('recaptcha', response);
                              }}
                              onloadCallback={() => {
                                console.log('done loading!');
                              }}
                            />
                          </div>
                          <DisplayError
                            error={errors.recaptcha}
                            touched={touched.recaptcha}
                          />
                          <div className='p-2 w-full'>
                            <button
                              type='submit'
                              disabled={isSubmitting}
                              className='text-white bg-golden-1 hover:bg-opacity-75 border-0 py-2 px-8 focus:outline-none rounded text-lg'
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Contact;
