import * as React from 'react';
import Seo from '@/components/Seo';
import ChallengeCard from '@/components/cards/ChallengeCard';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import HanaButton from '@/components/buttons/HanaButton';

const CHALLEGE_CATEGORIES = ['Tất cả', 'Chạy bộ', 'Đi bộ', 'Đạp xe'];

export default function ChallengeList() {
  return (
    <>
      <Seo />
      <main>
        <div className='container mx-auto'>
          <div className='h-[600px] pt-16'>
            <HanaCarousel>
              <img src='/images/active-campaign-banner.webp'></img>
            </HanaCarousel>
          </div>
          <section className='pt-16 xl:pt-16'>
            <div className='flex'>
              {CHALLEGE_CATEGORIES.map((c) => {
                return <HanaButton color='primary'>{c}</HanaButton>;
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
