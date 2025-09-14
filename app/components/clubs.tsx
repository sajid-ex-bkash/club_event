'use client';
import { ImBlogger } from 'react-icons/im';
import { IoMdFootball } from 'react-icons/io';
import { LiaTableTennisSolid } from 'react-icons/lia';
import { PiCodeBold, PiPersonSimpleBikeFill } from 'react-icons/pi';
import { TbBrandApplePodcast } from 'react-icons/tb';
import { useCrud } from '../hooks/ui/api/useCRUD';
import type { TEvent } from '../types/event';
import EventsContainer from './eventsContainer';
export default function Clubs() {
  const { data: events } = useCrud<TEvent>('/api/v1/event');
  const clubs = [
    { name: 'Game', icon: IoMdFootball },
    { name: 'Game2', icon: LiaTableTennisSolid },
    { name: 'Programming', icon: PiCodeBold },
    { name: 'Post', icon: ImBlogger },
    { name: 'Transport', icon: PiPersonSimpleBikeFill },
    { name: 'News', icon: TbBrandApplePodcast },
  ];
  return (
    <div>
      <div className='flex justify-between items-center'>
        {clubs.map(({ name, icon }) => (
          <div className='text-center' key={name}>
            <button type='button' className='cursor-pointer'>
              <span className='bg-blue-200 h-30 w-30 text-white rounded-full flex items-center justify-center'>
                {icon({ size: 50, className: 'text-blue-600' })}
              </span>
              <span className='text-xl mt-2'>{name}</span>
            </button>
          </div>
        ))}
      </div>
      <EventsContainer title='Upcoming event' data={events} />
    </div>
  );
}

export const mockEvents: TEvent[] = [
  {
    id: 1,
    name: 'Tech Conference 2025',
    description: 'A global tech meetup for developers.',
    location: 'San Francisco, CA',
    image: '/images/events/tech-conference.jpg',
    startTime: new Date('2025-09-15T09:00:00Z'),
    endTime: new Date('2025-09-15T17:00:00Z'),
    clubId: 3,
  },
  {
    id: 2,
    name: 'AI Hackathon',
    description: '24-hour hackathon focused on AI and ML.',
    location: 'New York, NY',
    image: '/images/events/ai-hackathon.jpg',
    startTime: new Date('2025-10-01T10:00:00Z'),
    endTime: new Date('2025-10-02T10:00:00Z'),
    clubId: 3,
  },
  {
    id: 3,
    name: 'Startup Pitch Night',
    description: 'Pitch your startup idea to investors.',
    location: 'London, UK',
    image: 'null',
    startTime: new Date('2025-11-05T18:00:00Z'),
    endTime: new Date('2025-11-05T21:00:00Z'),
    clubId: 3,
  },
  {
    id: 4,
    name: 'Design Sprint Workshop',
    description: 'A hands-on workshop on design sprints.',
    location: 'Berlin, Germany',
    image: '/images/events/design-sprint.jpg',
    startTime: new Date('2025-09-20T09:30:00Z'),
    endTime: new Date('2025-09-20T15:30:00Z'),
    clubId: 3,
  },
  {
    id: 5,
    name: 'Remote Work Summit',
    description: 'Exploring the future of remote and hybrid work.',
    location: 'Online',
    image: 'null',
    startTime: new Date('2025-12-10T14:00:00Z'),
    endTime: new Date('2025-12-10T20:00:00Z'),
    clubId: 3,
  },
  {
    id: 6,
    name: 'Blockchain Expo',
    description: 'Showcasing blockchain use cases.',
    location: 'Dubai, UAE',
    image: '/images/events/blockchain-expo.jpg',
    startTime: new Date('2025-09-25T09:00:00Z'),
    endTime: new Date('2025-09-25T18:00:00Z'),
    clubId: 3,
  },
  {
    id: 7,
    name: 'HealthTech Meetup',
    description: 'Networking for healthcare + tech professionals.',
    location: 'Boston, MA',
    image: 'null',
    startTime: new Date('2025-10-12T16:00:00Z'),
    endTime: new Date('2025-10-12T19:00:00Z'),
    clubId: 3,
  },
  {
    id: 8,
    name: 'Product Management Bootcamp',
    description: 'Learn product management essentials in 2 days.',
    location: 'Toronto, Canada',
    image: '/images/events/product-bootcamp.jpg',
    startTime: new Date('2025-11-20T09:00:00Z'),
    endTime: new Date('2025-11-21T17:00:00Z'),
    clubId: 3,
  },
  {
    id: 9,
    name: 'Cybersecurity Conference',
    description: 'Discuss the latest in cybersecurity.',
    location: 'Singapore',
    image: '/images/events/cybersecurity.jpg',
    startTime: new Date('2025-09-28T08:00:00Z'),
    endTime: new Date('2025-09-28T18:00:00Z'),
    clubId: 3,
  },
  {
    id: 10,
    name: 'Data Science Workshop',
    description: 'Hands-on workshop on machine learning with Python.',
    location: 'Sydney, Australia',
    image: 'null',
    startTime: new Date('2025-12-01T10:00:00Z'),
    endTime: new Date('2025-12-01T16:00:00Z'),
    clubId: 3,
  },
];
