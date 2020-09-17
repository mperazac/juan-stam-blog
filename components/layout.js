import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Menu from './menu';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className=''>
        <Alert preview={preview} />
        <Menu />
        <main className='h-screen mt-24'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
