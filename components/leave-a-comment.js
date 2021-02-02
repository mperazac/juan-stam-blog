import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { createNewComment } from '../lib/api-management';
import * as Yup from 'yup';
import Recaptcha from 'react-recaptcha';
import { formatISO } from 'date-fns';

const CommentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Demasiado largo')
    .required('Requerido'),
  comment: Yup.string()
    .min(2, 'Muy corto')
    .max(50000, 'Demasiado largo')
    .required('Requerido'),
  recaptcha: Yup.string().required('Captcha is required'),
});

export default function LeaveAComment(props) {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const entry = {
      fields: {
        name: { 'es-CR': values.name },
        title: { 'es-CR': props.title },
        comment: { 'es-CR': values.comment },
        createdDate: { 'es-CR': formatISO(new Date()) },
        blogPost: {
          'es-CR': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: props.id,
            },
          },
        },
      },
    };
    try {
      await createNewComment(entry);
      resetForm({});
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setFail(true);
      setTimeout(() => {
        setFail(false);
      }, 3000);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const DisplayError = ({ error, touched }) => {
    if (!error || !touched) {
      return null;
    }
    return <div className='text-xs text-red-600 my-2'>{error}</div>;
  };

  const InfoMessage = ({ message, success }) => {
    return (
      <span
        className={`text-sm ${
          success ? 'text-green-600' : 'text-red-600'
        } inline-block ml-3 align-middle`}
      >
        {message}
      </span>
    );
  };

  return (
    <div className='w-full max-w-2xl'>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8'>
        Deje su comentario:
      </h2>
      <Formik
        initialValues={{
          name: '',
          comment: '',
          recaptcha: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={CommentSchema}
      >
        {({ errors, touched, setFieldValue, isSubmitting, dirty }) => (
          <Form className='pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-base font-bold mb-2'
                htmlFor='name'
              >
                Nombre:
              </label>
              <Field
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name='name'
                type='text'
              />
              <DisplayError error={errors.name} touched={touched.name} />
            </div>
            <div className='mb-6'>
              <label
                className='block text-gray-700 text-base font-bold mb-2'
                htmlFor='comment'
              >
                Comentario:
              </label>
              <Field
                name='comment'
                component='textarea'
                className='appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                cols='30'
                rows='10'
              />
              <DisplayError error={errors.comment} touched={touched.comment} />
            </div>
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
            <DisplayError
              error={errors.recaptcha}
              touched={touched.recaptcha}
            />
            <div>
              <button
                className='bg-golden-1 hover:bg-opacity-75 text-white font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75'
                type='submit'
                disabled={!dirty || isSubmitting}
              >
                {isSubmitting ? 'Enviando' : 'Enviar'}
              </button>
              {success && (
                <InfoMessage message='¡Mensaje enviado!' success={true} />
              )}
              {fail && (
                <InfoMessage
                  message='¡Error al enviar el mensaje. Intente de nuevo'
                  success={false}
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
