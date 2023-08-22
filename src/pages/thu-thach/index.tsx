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
import ChallengeCategoriesDropDown from '@/components/challenge/ChallengeCategoriesDropdown';

export default function ChallengeList() {
  const router = useRouter();
  const { categoryId } = router.query;

  const onCategoryChange = (item: any) => {
    if (item?.id) {
      const currentPathname = router.pathname;
      const queryParams = {
        categoryId: item.id,
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
          <div className='mb-2 md:mb-10 md:pt-16'>
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
          <section className=' pt-6 md:hidden md:pt-16 xl:pt-16'>
            <ChallengeCategoriesDropDown onClick={onCategoryChange} />
          </section>
          <section className='pt-8'>
            <ChallengeCardList
              type='upcomming'
              categoryId={categoryId as string}
            />
          </section>
          <section className='pt-8'>
            <ChallengeCardList
              type='running'
              categoryId={categoryId as string}
            />
          </section>
          <section className='pt-8'>
            <ChallengeCardList
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
            time: 2,
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
