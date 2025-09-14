import Link from 'next/link';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen bg-base-200'>
      <aside className='w-64 bg-base-100 shadow-lg p-4'>
        <h2 className='text-xl font-bold mb-4'>Admin Panel</h2>
        <ul className='menu'>
          <li>
            <Link href='/admin/club'>Clubs</Link>
          </li>
          <li>
            <Link href='/admin/events'>Events</Link>
          </li>
        </ul>
      </aside>

      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
}
