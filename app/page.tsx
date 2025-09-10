import Clubs from './components/clubs';
import HomeSlider from './components/homeSlider';
import './globals.css';
export default function Home() {
  return (
    <>
      <main className='h-screen'>
        <div className='bg-gray-100'>
          <HomeSlider />
        </div>
        <div className='container mx-auto my-16'>
          <Clubs />
        </div>
      </main>
      {/* <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        This is a footer.
      </footer> */}
    </>
  );
}
