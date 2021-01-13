import Book from './book';
import SectionSeparator from './section-separator';

export default function AllBooks({ items }) {
  return (
    <section>
      <div className=''>
        {items.map((item, index) => (
          <div key={item.id}>
            <Book {...item} />
            {index < items.length - 1 && <SectionSeparator />}
          </div>
        ))}
      </div>
    </section>
  );
}
