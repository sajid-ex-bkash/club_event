'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
};

export default function CreateClub() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    fetch('/api/v1/club', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('Response:', result);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md p-6 mx-auto space-y-4 rounded-xl shadow-lg bg-base-200'
    >
      <h2 className='text-xl font-bold'>Create Club</h2>

      <div>
        <label className='label'>
          <span className='label-text'>Club Name</span>
        </label>
        <input
          type='text'
          placeholder='Enter club name'
          className='input input-bordered w-full'
          {...register('name', { required: 'Club name is required' })}
        />
        {errors.name && (
          <span className='text-red-500 text-sm'>{errors.name.message}</span>
        )}
      </div>

      <button type='submit' className='btn btn-primary w-full'>
        Submit
      </button>
    </form>
  );
}
