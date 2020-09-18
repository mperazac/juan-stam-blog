export default function Header({ title, description }) {
  return (
    <div className="mb-6 md:mb-20">
      <h2 className='text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-none mb-2 text-center md:text-center'>
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
}
