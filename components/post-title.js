export default function PostTitle({ children }) {
  return (
    <h1 className='text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-none mb-1 text-center md:text-left'>
      {children}
    </h1>
  );
}
