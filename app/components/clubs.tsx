'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { ImBlogger } from 'react-icons/im';
import { IoMdFootball } from 'react-icons/io';
import { LiaTableTennisSolid } from 'react-icons/lia';
import { PiCodeBold, PiPersonSimpleBikeFill } from 'react-icons/pi';
import { TbBrandApplePodcast } from 'react-icons/tb';
import { useCrud } from '../hooks/ui/api/useCRUD';
import type { TEvent } from '../types/event';
import EventsContainer from './eventsContainer';

const iconMap: Record<string, React.ElementType> = {
  outdoor: IoMdFootball,
  indoor: LiaTableTennisSolid,
  programming: PiCodeBold,
  bloggers: ImBlogger,
  biker: PiPersonSimpleBikeFill,
  podcast: TbBrandApplePodcast,
};

export default function Clubs() {
  const { data: clubs } = useCrud<{ id: number; name: string }>('/api/v1/club');

  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedIds = new Set(
    searchParams
      .get('clubs')
      ?.split(',')
      .map((id) => Number(id)) ?? []
  );

  const query =
    selectedIds.size > 0 ? `?clubs=${[...selectedIds].join(',')}` : '';
  const { data: events } = useCrud<TEvent>(`/api/v1/event${query}`);

  const toggleClub = (id: number) => {
    if (selectedIds.has(id)) {
      selectedIds.delete(id);
    } else {
      selectedIds.add(id);
    }

    const query =
      selectedIds.size > 0 ? `?clubs=${[...selectedIds].join(',')}` : '';
    router.push(`/${query}`, { scroll: false });
  };

  return (
    <div>
      <div className='flex justify-end my-4'></div>
      <div className='flex items-center justify-between gap-4 px-2 py-4 overflow-x-auto'>
        <button
          onClick={() => {
            router.push('/', { scroll: false });
          }}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            selectedIds.size === 0
              ? 'bg-primary text-white border border-primary'
              : 'border border-primary text-black hover:bg-primary hover:text-white'
          }`}
        >
          All
        </button>
        {clubs?.map(({ id, name }) => {
          const key = name.toLowerCase();
          const Icon = iconMap[key] ?? IoMdFootball;
          const isSelected = selectedIds.has(id);

          return (
            <div className='text-center' key={id}>
              <button
                type='button'
                onClick={() => toggleClub(id)}
                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition
                  ${
                    isSelected
                      ? 'bg-primary text-white border border-primary'
                      : 'border border-primary text-black hover:bg-primary hover:text-white'
                  }`}
              >
                <Icon size={20} />
                <span className='text-xl'>{name}</span>
              </button>
            </div>
          );
        })}
      </div>
      <EventsContainer title='Upcoming event' data={events} />
    </div>
  );
}
