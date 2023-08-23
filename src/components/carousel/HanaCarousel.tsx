import { useState } from 'react';
import Slider from 'react-slick';
import { twMerge } from 'tailwind-merge';

const HanaCarousel: React.FC<any> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState<number | undefined>(0);

  const carouselConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (prev: number, next: number) => {
      setCurrentSlide(next);
    },
    customPaging: (i: number) => (
      <div
        className={twMerge(
          'mt-4 !mr-0 !ml-0 h-1.5 rounded-lg bg-[#BCECFF]',
          currentSlide === i ? 'bg-[#00B6FD]' : ''
        )}
      ></div>
    ),
  };
  return <Slider className='w-full' {...carouselConfig}>{children}</Slider>;
};

export default HanaCarousel;
