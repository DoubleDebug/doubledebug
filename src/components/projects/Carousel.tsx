import 'react-awesome-slider/dist/styles.css';
import css from '../../styles/Carousel.module.css';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { Box, Image, useColorModeValue, useMediaQuery } from '@chakra-ui/react';

interface ICarouselProps {
  images: string[];
}

export const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <AwesomeSlider
      className={`${css.carousel} ${useColorModeValue(css.light, css.dark)} ${
        isMobile ? css.mobile : ''
      }`}
      mobileTouch
      bullets={images.length !== 1}
      organicArrows={images.length !== 1}
    >
      {images.map((image, index) => (
        <Box key={`carousel-slide-${index}`}>
          <Image
            alt={`Carousel slide ${index}`}
            src={image}
            px={isMobile ? 0 : 16}
            my="auto"
          />
        </Box>
      ))}
    </AwesomeSlider>
  );
};
