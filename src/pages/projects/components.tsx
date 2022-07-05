import css from '../../styles/Carousel.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { Image, useColorModeValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

interface ICarouselProps {
  images: string[];
}

export const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: css.btnPrev,
      }}
      pagination={{ clickable: true }}
      spaceBetween={25}
      autoplay={{ delay: 3000 }}
      loop
    >
      <span slot="wrapper-start">
        <div
          className={useColorModeValue(
            `${css.btnPrev} ${css.light}`,
            `${css.btnPrev} ${css.dark}`
          )}
        />
      </span>
      {images.map((image, index) => (
        <SwiperSlide
          key={`carousel-slide-${index}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxHeight: '700px',
          }}
        >
          <Image src={image} px={16} my="auto" objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
