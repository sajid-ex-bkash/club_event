import type { TEvent } from '../types/event';
import EventsCard from './eventCard';

interface EventsContainerProps {
  title: string;
  data: TEvent[];
}

export default function EventsContainer({ title, data }: EventsContainerProps) {
  return (
    <div className='mt-4 md:mt-12'>
      <h1 className='text-3xl font-bold mb-8'>{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
        {data.map((item) => (
          <EventsCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
