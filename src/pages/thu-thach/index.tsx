import * as React from 'react';
import Seo from '@/components/Seo';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchChallengeCategories } from '@/hooks/useChallengeCategories';
import ChallengeCategories from '@/components/challenge/ChallegeCategories';
import { fetchPublicChallenges } from '@/hooks/usePublicChallenge';
import ChallengeCardList from '@/components/challenge/ChallengeCardList';
import { useRouter } from 'next/router';
import { withCSR } from '@/hooks/withCSR';
import ImageWithSkeleton from '@/components/ImageWithSekeleton';
import ChallengeCategorySelect from '@/components/challenge/ChallengeCategorySelect';

export default function ChallengeList() {
  const router = useRouter();
  const { categoryId } = router.query;

  const onCategoryChange = (id: number) => {
    if (id) {
      const currentPathname = router.pathname;
      const queryParams = {
        categoryId: id,
      };

      router.push(
        {
          pathname: currentPathname,
          query: queryParams,
        },
        undefined,
        { scroll: false }
      );
    } else {
      router.push('/thu-thach', undefined, { scroll: false });
    }
  };

  return (
    <>
      <Seo />
      <main>
        <div className='container mx-auto'>
          <div className='mb-10 md:pt-16'>
            <HanaCarousel>
              <ImageWithSkeleton
                className='md:h-[600px]'
                src='/images/active-campaign-banner.webp'
                alt=''
              />
              <ImageWithSkeleton
                className='md:h-[600px]'
                src='https://hanacare.vn/images/campaign/campaign-banner.webp'
                alt=''
              />
            </HanaCarousel>
          </div>
          <section className='hidden pt-6 md:flex md:pt-16 xl:pt-16'>
            <ChallengeCategories
              activeCategory={parseInt(categoryId as string)}
              onClick={onCategoryChange}
            />
          </section>
          <section className='mt-[40] md:hidden w-[120px]'>
            <ChallengeCategorySelect activeCategory={parseInt(categoryId as string)}
              onClick={onCategoryChange} />
          </section>
          <section>
            <ChallengeCardList
              className='pt-8'
              type='upcomming'
              categoryId={categoryId as string}
            />
          </section>
          <section>
            <ChallengeCardList
              className='pt-8'
              type='running'
              categoryId={categoryId as string}
            />
          </section>
          <section>
            <ChallengeCardList
              className='pt-8'
              type='finished'
              categoryId={categoryId as string}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = withCSR(async (ctx) => {
  const queryClient = new QueryClient();

  const { categoryId } = ctx.query;

  try {
    await Promise.all([
      queryClient.prefetchQuery(
        ['challenge/categories'],
        fetchChallengeCategories
      ),
      queryClient.prefetchQuery(
        [
          'challenge/public-challenges',
          {
            limit: 10,
            time: 1,
            ...(categoryId
              ? { category_id: parseInt(categoryId as string) }
              : {}),
          },
        ],
        () =>
          fetchPublicChallenges({
            limit: 10,
            time: 2,
            ...(categoryId
              ? { category_id: parseInt(categoryId as string) }
              : {}),
          })
      ),
      queryClient.prefetchQuery(
        [
          'challenge/public-challenges',
          {
            limit: 10,
            time: 3,
            ...(categoryId
              ? { category_id: parseInt(categoryId as string) }
              : {}),
          },
        ],
        () =>
          fetchPublicChallenges({
            limit: 10,
            time: 3,
            ...(categoryId
              ? { category_id: parseInt(categoryId as string) }
              : {}),
          })
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
});
