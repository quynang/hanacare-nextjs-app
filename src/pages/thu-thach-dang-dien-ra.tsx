import * as React from 'react';
import Seo from '@/components/Seo';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import ChallengeCategories from '@/components/challenge/ChallegeCategories';
import { usePublicChallenges } from '@/hooks/usePublicChallenge';
import { useRouter } from 'next/router';
import ChallengeCard from '@/components/challenge/ChallengeCard';
import ChallengeCategorySelect from '@/components/challenge/ChallengeCategorySelect';
import ImageWithSkeleton from '@/components/ImageWithSekeleton';

export default function RunnigChallengeList() {
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
      router.push('/thu-thach-dang-dien-ra');
    }
  };

  const { data } = usePublicChallenges({
    limit: 30,
    time: 3,
    ...(categoryId ? { category_id: parseInt(categoryId as string) } : {}),
  });

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
          <section className='pt-16 xl:pt-16'>
            <div className='mb-8 flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>CHƯƠNG TRÌNH SẮP DIỄN RA</h1>
            </div>
            <div className='hidden md:block'>
              <ChallengeCategories
                activeCategory={parseInt(categoryId as string)}
                onClick={onCategoryChange}
              />
            </div>
            <div className='md:hidden w-[120px]'>
              <ChallengeCategorySelect activeCategory={parseInt(categoryId as string)}
                onClick={onCategoryChange} />
            </div>

          </section>
          <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8'>
            {(data?.data?.items || []).map((item: any, index: number) => (
              <ChallengeCard key={index} type='running' data={item} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
