import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function LeaveAComment() {
  const postComment = () => {};
  return (
    <div className='w-full max-w-2xl'>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8'>
        Deje su comentario:
      </h2>
      <Formik
        initialValues={{
          name: '',
          comment: '',
        }}
        onSubmit={async (values) => {
          debugger;
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className='pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-base font-bold mb-2'
              htmlFor='name'
            >
              Nombre:
            </label>
            <Field
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
            />
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              cols='30'
              rows='10'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
