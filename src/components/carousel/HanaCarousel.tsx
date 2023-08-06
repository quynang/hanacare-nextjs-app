import { Carousel, type CustomFlowbiteTheme } from 'flowbite-react';

const hanaTheme: CustomFlowbiteTheme['carousel'] = {
  root: {
    leftControl: 'hidden',
    rightControl: 'hidden',
  },
  indicators: {
    active: {
      off: 'bg-[#BCECFF]',
      on: 'bg-[#00B6FD] rounded-full w-4',
    },
    base: 'h-1.5 w-4 rounded-none',
    wrapper:
      'absolute bg-[#BCECFF] -bottom-5 left-1/2 flex -translate-x-1/2 space-x-0 rounded-lg overflow-hidden',
  },
};

const HanaCarousel: React.FC<any> = ({ children }) => {
  return <Carousel theme={hanaTheme}>{children}</Carousel>;
};

export default HanaCarousel;
