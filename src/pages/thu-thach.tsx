import * as React from 'react';
import Seo from '@/components/Seo';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchChallengeCategories } from '@/hooks/useChallengeCategories';
import ChallengeCategories from '@/components/challenge/ChallegeCategories';
import { fetchPublicChallenges } from '@/hooks/usePublicChallenge';
import ChallengeCardList from '@/components/challenge/ChallengeCardList';

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
            <ChallengeCardList type='upcomming' />
          </section>
          <section className='pt-8'>
            <ChallengeCardList type='running' />
          </section>
          <section className='pt-8'>
            <ChallengeCardList type='finished' />
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
