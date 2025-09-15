'use client';

import { useCrud } from '@/app/hooks/ui/api/useCRUD';
import { TEvent } from '@/app/types/event';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type Club = {
  id: string;
  name: string;
};

export default function CreateEvent() {
  const { createItem } = useCrud<TEvent>('/api/v1/event');
  const router = useRouter();

  const [clubs, setClubs] = useState<Club[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEvent>();

  useEffect(() => {
    fetch('/api/v1/club')
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, []);

  const onSubmit = async (data: TEvent) => {
    console.log('Form Data:', data);
    await createItem(data);
    // router.push('/admin/events');
  };

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Create Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Name */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Event Name</span>
          </label>
          <input
            type='text'
            placeholder='Enter event name'
            {...register('name', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.name && (
            <span className='text-error text-sm'>Name is required</span>
          )}
        </div>

        {/* Club Dropdown */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Select Club</span>
          </label>
          <select
            className='select select-bordered w-full'
            {...register('clubId', { required: true })}
          >
            <option value=''>Select a club</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
          {errors.clubId && (
            <span className='text-error text-sm'>Club is required</span>
          )}
        </div>

        {/* Description */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <textarea
            placeholder='Enter description'
            {...register('description')}
            className='textarea textarea-bordered w-full'
          />
        </div>

        {/* Location */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Location</span>
          </label>
          <input
            type='text'
            placeholder='Enter location'
            {...register('location', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.location && (
            <span className='text-error text-sm'>Location is required</span>
          )}
        </div>

        {/* Start Time */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Start Time</span>
          </label>
          <input
            type='datetime-local'
            {...register('startTime', { required: true })}
            className='input input-bordered w-full'
          />
          {errors.startTime && (
            <span className='text-error text-sm'>Start time is required</span>
          )}
        </div>

        {/* End Time */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>End Time</span>
          </label>
          <input
            type='datetime-local'
            {...register('endTime')}
            className='input input-bordered w-full'
          />
        </div>

        {/* Image */}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Image URL</span>
          </label>
          <input
            type='url'
            placeholder='Enter image URL'
            {...register('image')}
            className='input input-bordered w-full'
          />
        </div>

        {/* Submit */}
        <button type='submit' className='btn btn-primary w-full'>
          Create Event
        </button>
      </form>
    </div>
  );
}
