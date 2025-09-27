import Clubs from './components/clubs';
import Footer from './components/footer';
import HomeSlider from './components/homeSlider';
import './globals.css';
export default function Home() {
  return (
    <>
      <main className=''>
        <div className=''>
          <HomeSlider />
        </div>
        <div className='container mx-auto my-0 md:my-16'>
          <Clubs />
        </div>
      </main>

      <Footer />
    </>
  );
}
