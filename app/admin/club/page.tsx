'use client';

import { useCrud } from '@/app/hooks/ui/api/useCRUD'; // adjust path
import Link from 'next/link';

type Club = {
  id: number;
  name: string;
};

export default function GetClub() {
  const { data: clubs, loading } = useCrud<Club>('/api/v1/club');

  if (loading) return <p>Loading...</p>;

  return (
    <div className='p-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Clubs</h1>
        <Link href='/admin/club/create'>
          <button className='btn btn-primary'>Add New</button>
        </Link>
      </div>

      <table className='table w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Club Name</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club) => (
            <tr key={club.id}>
              <td>{club.id}</td>
              <td>{club.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
