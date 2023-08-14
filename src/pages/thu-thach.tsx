import * as React from 'react';
import Seo from '@/components/Seo';
import ChallengeCard from '@/components/cards/ChallengeCard';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import axios from 'axios';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchChallengeCategories } from '@/hooks/useChallengeCategories';
import ChallengeCategories from '@/components/challege/ChallegeCategories';
import { fetchPublicChallenges } from '@/hooks/usePublicChallenge';
import ChallengeCardList from '@/components/challege/ChallengeCardList';

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
            <ChallengeCategories />
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>SẮP DIỄN RA</div>
            <div className='flex gap-6'>
              <ChallengeCardList type='upcomming' />
            </div>
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>ĐANG DIỄN RA</div>
            <div className='flex gap-6'>
              <ChallengeCardList type='running' />
            </div>
          </section>
          <section className='pt-8'>
            <div className='mb-8 text-2xl font-bold'>ĐÃ KẾT THÚC</div>
            <div className='flex gap-6'>
              <ChallengeCardList type='finished' />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery(
        ['challenge/categories'],
        fetchChallengeCategories
      ),
      queryClient.prefetchQuery(
        ['challenge/public-challenges', { limit: 4, time: 2 }],
        () => fetchPublicChallenges({ limit: 4, time: 2 })
      ),
      queryClient.prefetchQuery(
        ['challenge/public-challenges', { limit: 4, time: 3 }],
        () => fetchPublicChallenges({ limit: 4, time: 3 })
      ),
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error('Error prefetching data:', error);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        error: 'An error occurred while fetching data.',
      },
    };
  }
}
