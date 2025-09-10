'use client';
import loaderAnimation from '@/public/problem_solving.json';
import Lottie from 'lottie-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HomeSlider() {
  return (
    <Swiper loop={true} className='mySwiper container mx-auto h-auto'>
      <SwiperSlide>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full p-4'>
          <div>
            <h1 className='text-6xl font-bold'>Hello Programmer</h1>
            <p className='text-base my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              rerum?
            </p>
            <button
              type='button'
              className='bg-blue-400 text-white px-6 py-2 rounded-md '
            >
              Explore
            </button>
          </div>
          <div>
            <div className='w-full h-auto flex items-center justify-center'>
              <Lottie animationData={loaderAnimation} loop />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}
