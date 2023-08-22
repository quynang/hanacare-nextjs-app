import * as React from 'react';
import Seo from '@/components/Seo';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import ChallengeCategories from '@/components/challenge/ChallegeCategories';
import { usePublicChallenges } from '@/hooks/usePublicChallenge';
import { useRouter } from 'next/router';
import ChallengeCard from '@/components/challenge/ChallengeCard';

export default function RunnigChallengeList() {
  const router = useRouter();
  const { categoryId } = router.query;

  const onCategoryChange = (item: any) => {
    if (item?.id) {
      const currentPathname = router.pathname;
      const queryParams = {
        categoryId: item.id,
      };

      router.push({
        pathname: currentPathname,
        query: queryParams,
      });
    } else {
      router.push('/thu-thach-dang-dien-ra');
    }
  };

  const { data, isLoading, isFetching } = usePublicChallenges({
    limit: 30,
    time: 1,
    ...(categoryId ? { category_id: parseInt(categoryId as string) } : {}),
  });

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
            <div className='mb-8 flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>CHƯƠNG TRÌNH ĐÃ KẾT THÚC</h1>
            </div>
            <div className='hidden md:flex'>
              <ChallengeCategories
                activeCategory={parseInt(categoryId as string)}
                onClick={onCategoryChange}
              />
            </div>
          </section>
          <section className='gap-4 pt-8 md:grid md:grid-cols-4'>
            {(data?.data?.items || []).map((item: any, index: number) => (
              <ChallengeCard key={index} type='finished' data={item} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
