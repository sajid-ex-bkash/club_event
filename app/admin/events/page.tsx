'use client';

import { useCrud } from '@/app/hooks/ui/api/useCRUD';
import { TEvent } from '@/app/types/event';
import Link from 'next/link';

export default function GetEvent() {
  const { data: events, loading } = useCrud<TEvent>('/api/v1/event');

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Events</h1>
        <Link href='/admin/events/create'>
          <button className='btn btn-primary'>Add New</button>
        </Link>
      </div>

      <table className='table w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{new Date(event.startTime).toLocaleString()}</td>
              <td>
                {event.endTime ? new Date(event.endTime).toLocaleString() : '-'}
              </td>
              <td>
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.name}
                    className='w-16 h-16 object-cover rounded'
                  />
                ) : (
                  'No Image'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
