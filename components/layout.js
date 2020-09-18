import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Menu from './menu';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Menu />
      <main className='relative mt-48 md:mt-32'>{children}</main>
      <Footer />
    </>
  );
}
