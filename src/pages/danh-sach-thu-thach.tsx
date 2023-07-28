import * as React from 'react';
import Seo from '@/components/Seo';
import ChallengeCard from '@/components/cards/ChallengeCard';
import { Carousel } from 'flowbite-react';

const CHALLEGE_CATEGORIES = ['Tất cả', 'Chạy bộ', 'Đi bộ', 'Đạp xe'];

export default function ChallengeList() {
  return (
    <>
      <Seo />
      <main>
        <div className='container mx-auto'>
          <div className='h-[600px] pt-16'>
            <Carousel onSlideChange={(slideIdx) => console.log(slideIdx)}>
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=1'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=2'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=3'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=4'
              />
              <img
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=5'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=1'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=2'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=3'
              />
              <img
                height={680}
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=4'
              />
              <img
                alt='...'
                src='https://source.unsplash.com/random/900x600?sig=5'
              />
            </Carousel>
          </div>
          <section className='pt-16 xl:pt-16'>
            <div className='flex'>
              {CHALLEGE_CATEGORIES.map((c) => {
                return (
                  <button className='mr-4 rounded border border-blue-500 bg-transparent px-6 py-2.5 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>
                    {c}
                  </button>
                );
              })}
            </div>
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>SẮP DIỄN RA</div>
            <div className='flex gap-6'>
              {CHALLEGE_CATEGORIES.map((c, index) => {
                return <ChallengeCard id={index} />;
              })}
            </div>
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>ĐANG DIỄN RA</div>
            <div className='flex gap-6'>
              {CHALLEGE_CATEGORIES.map((c, index) => {
                return <ChallengeCard id={index} challegeType='runing' />;
              })}
            </div>
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>ĐÃ KẾT THÚC</div>
            <div className='flex gap-6'>
              {CHALLEGE_CATEGORIES.map((c, index) => {
                return <ChallengeCard id={index} challegeType='finished' />;
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
