import ChallengeCard from '@/components/challenge/ChallengeCard';
import { usePublicChallenges } from '@/hooks/usePublicChallenge';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import ChanllengeCardSekeleton from '@/components/sekeletons/ChallengeCardSekeleton';
import SeeAllCard from '@/components/challenge/SeeAllCard';
import { useRouter } from 'next/router';

const challegeTypeMapping = {
  upcomming: 2,
  running: 3,
  finished: 1,
};

const titleChallengeTypeMapping = {
  upcomming: 'SẮP DIỄN RA',
  running: 'ĐANG DIỄN RA',
  finished: 'ĐÃ KẾT THÚC',
};

const challengeTypeLinkMapping = {
  upcomming: '/thu-thach-sap-dien-ra',
  running: '/thu-thach-dang-dien-ra',
  finished: '/thu-thach-da-ket-thuc',
};

type ChallengeCardListProps = {
  type: 'upcomming' | 'running' | 'finished';
  categoryId?: string;
  className?: string
};

const SLIDE_TO_SHOW = 4;
const SLIDE_TO_SCROLL = 4;
const CHALLENGE_PAGE_SIZE = 10;

const ChallengeCardList: React.FC<ChallengeCardListProps> = ({
  type,
  categoryId,
  className = ''
}) => {
  const { data, isLoading, isFetching } = usePublicChallenges({
    limit: CHALLENGE_PAGE_SIZE,
    time: challegeTypeMapping[type],
    ...(categoryId ? { category_id: parseInt(categoryId) } : {}),
  });
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(true);

  const router = useRouter()

  const slickConfig = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: SLIDE_TO_SHOW,
    slidesToScroll: SLIDE_TO_SCROLL,
    variableWidth: true,
    beforeChange: (current: number, next: number) => {
      if (next === 0) {
        setReachedStart(true);
      } else {
        setReachedStart(false);
      }

      if (next >= CHALLENGE_PAGE_SIZE - SLIDE_TO_SCROLL) {
        setReachedEnd(true);
      } else {
        setReachedEnd(false);
      }
    },
  };

  const sliderRef = useRef();

  const hasMore = data?.data?.total > CHALLENGE_PAGE_SIZE;

  if (isLoading)
    return (
      <div className={className}>
        <div role='status' className='max-w-sm animate-pulse'>
          <div className='w-60 md:w-100 mb-8 rounded-lg h-[32px] bg-gray-200 '></div>
        </div>
        <div className='flex gap-4'>
          <ChanllengeCardSekeleton />
          <div className='hidden md:block'>
            <ChanllengeCardSekeleton />
          </div>
          <div className='hidden lg:block'>
            <ChanllengeCardSekeleton />
          </div>
          <div className='hidden xl:block'>
            <ChanllengeCardSekeleton />
          </div>
        </div>
      </div>
    );

  if (!isLoading && !data.data?.items?.length) return null;

  const onNext = () => {
    //@ts-ignore
    sliderRef.current.slickNext();
  };

  const onPrev = () => {
    //@ts-ignore
    sliderRef.current.slickPrev();
  };

  const onSeeAll = () => {
    router.push(challengeTypeLinkMapping[type])
  }
  return (
    <div className={twMerge('card-list', className)}>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>
          {titleChallengeTypeMapping[type]}
        </h1>
        <Link href={challengeTypeLinkMapping[type]}>
          <div className='text-primary'>Xem tất cả</div>
        </Link>
      </div>
      {/* @ts-ignore */}
      <Slider ref={sliderRef} {...slickConfig}>
        {(data?.data?.items || []).map((item: any, index: number) => (
          <ChallengeCard key={index} type={type} data={item} width={312} />
        ))}
        {hasMore && <SeeAllCard width={312} onSeeAll={onSeeAll} />}
      </Slider>
      {data.data?.items?.length > SLIDE_TO_SHOW && (
        <div className='mt-8 hidden w-full justify-center gap-2 md:flex'>
          <button
            onClick={onPrev}
            className={twMerge(
              'flex h-[48px] w-[48px] items-center justify-center rounded-full border',
              !reachedStart && 'text-primary'
            )}
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={onNext}
            className={twMerge(
              'flex h-[48px] w-[48px] items-center justify-center rounded-full border',
              !reachedEnd && 'text-primary'
            )}
          >
            <BsArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeCardList;
