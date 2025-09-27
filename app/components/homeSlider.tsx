'use client';
import bike from '@/public/bike.json';
import blog from '@/public/blog.json';
import outdoor from '@/public/footballer.json';
import indoor from '@/public/indoor.json';
import podcast from '@/public/podcast.json';
import programming from '@/public/problem_solving.json';
import Lottie from 'lottie-react';
import { useRef } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HomeSlider() {
  const swiperRef = useRef<SwiperCore>(null);

  return (
    <Swiper
      loop={true}
      // autoplay={{
      //   delay: 5500,
      //   disableOnInteraction: false,
      // }}
      // modules={[Autoplay]}
      className='mySwiper container mx-auto'
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {clubs.map((club, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center py-0 md:py-20'>
            <div className='text-center md:text-left order-2 md:order-1 relative'>
              <h1 className='text-4xl md:text-6xl font-bold'>{club.title}</h1>
              <p className='text-base md:my-4'>{club.description}</p>

              <div className='text-4xl my-4 flex justify-center md:justify-start gap-4'>
                <button
                  className='hover:text-blue-400 cursor-pointer'
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <CiCircleChevLeft />
                </button>
                <button
                  className='hover:text-blue-400 cursor-pointer'
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <CiCircleChevRight />
                </button>
              </div>

              <button
                type='button'
                className='bg-blue-400 text-white px-6 py-2 rounded-md'
              >
                Explore
              </button>
            </div>
            <div className='order-1 md:order-2'>
              <div className='w-full max-h-[580px] flex items-center justify-center'>
                <Lottie
                  animationData={club.media}
                  loop
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const clubs = [
  {
    title: 'Programming Club',
    description: 'Where ideas turn into code and code turns into impact.',
    media: programming,
  },
  {
    title: 'Indoor Games Club',
    description:
      'From chess to carrom, challenge your colleagues and have fun indoors.',
    media: indoor,
  },
  {
    title: 'Outdoor Sports Club',
    description:
      'Cricket, football, and beyond—our field is always open for teamwork.',
    media: outdoor,
  },
  {
    title: 'Bikers Club',
    description: 'For those who live for the road, speed, and adventure.',
    media: bike,
  },
  {
    title: 'Podcast Club',
    description: 'Sharing stories, ideas, and conversations that matter.',
    media: podcast,
  },
  {
    title: 'Blogging Club',
    description: 'A space for words, creativity, and thought leadership.',
    media: blog,
  },
];
