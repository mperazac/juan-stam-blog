import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function DateComponent({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'd LLLL, yyyy', { locale: es })}
    </time>
  );
}
