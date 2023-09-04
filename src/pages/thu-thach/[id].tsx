import React, { useMemo, useState } from 'react';
import Seo from '@/components/Seo';
import HanaCarousel from '@/components/carousel/HanaCarousel';
import { useRouter } from 'next/router';
import { useDetailPublicChallenge } from '@/hooks/useChallengeDetail';
import { DATE_FORMAT_DISPLAY } from '@/constant';
import dayjs from 'dayjs';
import Calendar from '../../assests/icons/Calendar.svg';
import ChallengeRankingResult from '@/components/challenge/ChallengeRankingResult';
import { twMerge } from 'tailwind-merge';
import { getChallengeMinestone } from '@/lib/helper';
import TrophyIcon from '../../assests/icons/trophy.svg';
import ImageWithSkeleton from '@/components/ImageWithSekeleton';

export default function ChallengeDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [rankType, setRankType] = useState<'today' | 'final'>('today');

  const [canSeeMore, setCanSeeMore] = useState(true);

  const { data, isLoading } = useDetailPublicChallenge(parseInt(id as string));

  const {
    images = [],
    categories = [],
    name = '',
    start_time,
    end_time,
    count_participant = 0,
    organizes = [],
    sponsors = [],
    policy = '',
  } = data?.data || {};

  const period = `${dayjs(start_time).format(DATE_FORMAT_DISPLAY)} - ${dayjs(
    end_time
  ).format(DATE_FORMAT_DISPLAY)}`;

  const remainDay = dayjs(end_time).diff(dayjs(), 'day');

  const challegeMinestone = getChallengeMinestone(start_time, end_time);

  const progressData = useMemo(() => {
    if (challegeMinestone === 'upcomming') return 0;
    if (challegeMinestone === 'finished') return 100;
    const total = dayjs(end_time).diff(dayjs(start_time), 'day');
    const take = dayjs().diff(start_time, 'day');
    return (take / total) * 100;
  }, [data]);

  if (isLoading) return null;

  return (
    <>
      <Seo />
      <main>
        <div className='container mx-auto'>
          <section className='md:mt-[80px] flex '>
            <HanaCarousel>
              {images.map((img: string, index: number) => (
                <ImageWithSkeleton className='md:h-[600px] w-full' src={img} alt={''} key={index} />
              ))}
            </HanaCarousel>
          </section>
          <section className='mt-10 md:mt-16 flex flex-col items-center justify-center'>
            <div className='flex gap-6'>
              {categories.map((c: any, index: number) => (
                <div key={index} className='rounded-xl bg-[#00B6FD33] py-[8px] px-[20px]  text-primary'>
                  {c.name}
                </div>
              ))}
            </div>
            <h1 className='mt-4 text-[36px] font-bold leading-[54px]'>
              {name}
            </h1>
            <div className='align-center my-4 flex text-slate-500'>
              <Calendar className='mr-2 text-[24px]' />
              <span className='text-[16px]'>{period}</span>
            </div>
            <div className='ml-auto mr-auto h-2	w-full max-w-[936px] rounded-full bg-[#DDFFBB]'>
              <div
                className='h-2 rounded-full bg-[#75C905]'
                style={{ width: `${progressData}%` }}
              />
            </div>
            <div className='mt-1 ml-auto mr-auto flex w-full max-w-[936px] justify-between '>
              <div>
                <span className='mr-1 text-primary'>+{count_participant}</span>
                <span>người tham gia</span>
              </div>
              <div>
                <span className='mr-1 text-[#75C905]'>{remainDay}</span>
                <span>ngày kết thúc</span>
              </div>
            </div>
            {challegeMinestone === 'finished' && (
              <div className='mt-4 max-w-[936px] flex items-start w-full'>
                <TrophyIcon className="text-[50px] md:text-[24px]" />
                <span className='ml-2'>
                  Kết quả sẽ được thông báo đến các thành viên thắng giải trong
                  vòng 5-7 ngày làm việc kể từ ngày kết thúc sự kiện.
                </span>
              </div>
            )}
          </section>
          {challegeMinestone !== 'upcomming' && (
            <section className='mt-[48px] flex flex-col items-center '>
              <h3 className='text-[32px] font-medium text-[#333333]'>
                Danh sách xếp hạng
              </h3>
              <div className='mt-[24px] flex h-[54px] w-[353px] rounded-full p-[8px] shadow-[0px_4px_24px_0px_#0000000D]'>
                <div
                  onClick={() => setRankType('today')}
                  className={twMerge(
                    'flex-1 cursor-pointer rounded-full  p-[8px] text-center font-medium text-[#808998]',
                    rankType === 'today' && 'bg-[#00B6FD33] text-primary'
                  )}
                >
                  Hôm nay
                </div>
                <div
                  onClick={() => setRankType('final')}
                  className={twMerge(
                    'flex-1 cursor-pointer rounded-full  p-[8px] text-center font-medium text-[#808998]',
                    rankType === 'final' && 'bg-[#00B6FD33] text-primary'
                  )}
                >
                  Chung cuộc
                </div>
              </div>

              <div className='mt-[40px]'>
                <ChallengeRankingResult
                  type={rankType}
                  challengeId={parseInt(id as string)}
                />
              </div>
            </section>
          )}
          <section className='mt-[48px]'>
            <div>
              <h3 className='mb-4 text-[32px] font-bold'>Nhà tài trợ</h3>
              {sponsors.map((s: any, index: number) => (
                <div className='flex' key={index}>
                  <img
                    className='h-[72px] w-[72px] rounded-xl border object-cover'
                    src={s.avatar}
                  />
                  <span className='ml-2 text-[20px] font-medium text-[#333333]'>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
            <div className='mt-[40px]'>
              <h3 className='mb-4 text-[32px] font-bold'>Đơn vị tổ chức</h3>
              {organizes.map((s: any, index: number) => (
                <div className='flex' key={index}>
                  <img
                    className='h-[72px] w-[72px] rounded-xl border object-cover'
                    src={s.avatar}
                  />
                  <span className='ml-2 text-[20px] font-medium text-[#333333]'>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
            <div className='mt-[40px]'>
              <h3 className='mb-4 text-[32px] font-bold'>
                Thể lệ chương trình:
              </h3>
              <div
                className={canSeeMore ? 'line-clamp-15' : ''}
                dangerouslySetInnerHTML={{ __html: policy }}
              ></div>
              <span
                onClick={() => setCanSeeMore(!canSeeMore)}
                className='mt-2 cursor-pointer font-medium text-primary'
              >
                {canSeeMore ? 'Xem thêm' : 'Thu gọn'}
              </span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
