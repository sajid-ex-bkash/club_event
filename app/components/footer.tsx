import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 md:py-24'>
      <div className='container mx-auto grid grid-cols-auto md:grid-cols-2 gap-4 '>
        <div>
          <div className='flex flex-wrap gap-4 md:gap-1 justify-center md:justify-start items-center'>
            <Link href='https://life.exabyting.com/'>
              <Image
                src='https://life.exabyting.com/assets/images/icon/white-logo.svg'
                alt='Exabyting Logo'
                width={150}
                height={50}
                className='object-contain'
              />
            </Link>
            <Link
              href='https://www.google.com/maps/place/Exabyting/@23.7789381,90.3921574,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c70025eb5a49:0x636077a75d8c3775!8m2!3d23.7789381!4d90.3947323!16s%2Fg%2F11y2b3dq7j?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'
              className='ml-4 text-xl font-bold'
            >
              <span className='text-base p-2 border-[0.5] rounded-lg'>
                Show location map
              </span>
            </Link>
          </div>
          <p className='mt-8 text-center md:text-left '>
            A#7, House# 470, Road# 31, Mohakhali DOHS, Dhaka 1212, Bangladesh
          </p>
        </div>
        <div className='flex justify-center md:justify-end '>
          <div className=''>
            <div className='flex justify-center md:justify-end gap-4 text-3xl'>
              <Link
                href='https://www.facebook.com/exabytingtech'
                className='mr-4'
              >
                <IoLogoFacebook />
              </Link>
              <Link href='https://www.linkedin.com/company/exabyting/'>
                <FaLinkedin />
              </Link>
            </div>
            <p className='mt-8 text-center md:text-left'>
              ©2025 Exabyting. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
