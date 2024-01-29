'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { images } from '@/lib/images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function slides() {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-full rounded-lg"
        >
          <SwiperSlide>
            <p>2</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default slides;
