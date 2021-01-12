import Book from './book';
import SectionSeparator from './section-separator';

export default function AllBooks({ items }) {
  return (
    <section>
      <div className=''>
        {items.map((item, index) => (
          <>
            <Book key={item.id} {...item} />
            {index < items.length - 1 && <SectionSeparator />}
          </>
        ))}
      </div>
    </section>
  );
}
