import Image from 'next/image';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';
import { TbCalendar } from 'react-icons/tb';
import type { TEvent } from '../types/event';

interface EventsCardProps {
  data: TEvent;
}
export default function EventsCard({ data }: EventsCardProps) {
  return (
    <Link
      href='#'
      className='hover:scale-102 transition-all duration-200 overflow-hidden'
    >
      <div className='relative w-full h-48 rounded-xl overflow-hidden'>
        <Image src={'https://shorturl.at/GiG1U'} alt='event' fill={true} />
      </div>
      <div className='px-2 py-4'>
        <div className='flex justify-between items-center text-sm mb-2'>
          <p className='flex items-center gap-1'>
            <TbCalendar />
            {new Date(data.startTime).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <p className='flex items-center gap-1'>
            <MdLocationPin />
            {data.location}
          </p>
        </div>
        <h2 className='font-semibold text-base'>{data.name}</h2>
      </div>
    </Link>
  );
}
