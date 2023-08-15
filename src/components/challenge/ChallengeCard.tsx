import Calendar from '../../assests/icons/Calendar.svg';
import Flag from '../../assests/icons/flag.svg';
import dayjs from 'dayjs';
import { DATE_FORMAT_DISPLAY } from '@/constant';
import ChallengeTop3UserAvatar from '@/components/challenge/ChallengeTop3UserAvatar';
import { useMemo } from 'react';
import { copyFileSync } from 'fs';

type ChallengeProps = {
  type?: 'upcomming' | 'running' | 'finished';
  data: Challenge;
};

const ChallengeCard: React.FC<ChallengeProps> = ({
  type = 'upcomming',
  data,
}) => {
  if (!data) return null;

  const { id } = data;

  const period = `${dayjs(data.start_time).format(
    DATE_FORMAT_DISPLAY
  )} - ${dayjs(data.end_time).format(DATE_FORMAT_DISPLAY)}`;

  const remainDay = dayjs(data.end_time).diff(dayjs(), 'day');

  const progressData = useMemo(() => {
    if (type === 'finished') {
      return 100;
    } else if (type === 'running') {
      const total = dayjs(data.end_time).diff(dayjs(data.start_time), 'day');
      const take = dayjs().diff(data.start_time, 'day');
      return (take / total) * 100;
    } else {
      return 100;
    }
  }, [data, type]);

  return (
    <div className='flex h-[406px] w-[312px] flex-col rounded-2xl bg-white shadow-[0px_3px_24px_0px_#00000014]'>
      <img
        className='h-[144px] w-[312px] rounded-t-2xl object-cover'
        src={data?.images?.[0]}
        alt=''
      />
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h4 className='mb-2 font-bold line-clamp-1'>{data?.name}</h4>
          <div className='align-center mb-4 flex text-slate-500'>
            <Calendar className='mr-2' />
            <span className='text-xs'>{period}</span>
          </div>
          <div className='h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
            <div
              className='h-1 rounded-full bg-[#75C905]'
              style={{ width: `${progressData}%` }}
            ></div>
            {type === 'upcomming' && (
              <div className='mt-1 text-xs text-primary'>
                Sự kiện sắp diễn ra
              </div>
            )}
            {type === 'running' && (
              <div className='mt-1 flex justify-between text-xs'>
                <div>
                  <span className='mr-1 text-primary'>
                    +{data.count_participant}
                  </span>
                  <span>người tham gia</span>
                </div>
                <div>
                  <span className='mr-1 text-[#75C905]'>{remainDay}</span>
                  <span>ngày kết thúc</span>
                </div>
              </div>
            )}
            {type === 'finished' && (
              <div className='mt-2 flex items-center'>
                <ChallengeTop3UserAvatar key={id} challengeId={id} />
                <div className='text-xs'>
                  <span className='mr-1 font-medium text-primary'>
                    +{data.count_participant}
                  </span>
                  <span>người tham gia</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {type === 'finished' && (
          <button
            type='button'
            className='mr-2 mb-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 '
          >
            Chi tiết
          </button>
        )}
        {type === 'upcomming' && (
          <button
            type='button'
            className='dark:focus:ring-[#75C905]/55 mr-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-[#75C905] px-5 py-2.5   text-center text-white hover:bg-[#75C905]/90 focus:outline-none focus:ring-4 focus:ring-[#75C905]/50'
          >
            <Flag className='mr-2' />
            Đăng ký ngay
          </button>
        )}
        {type === 'running' && (
          <button
            type='button'
            className='dark:focus:ring-[#75C905]/55 mr-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5   text-center text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50'
          >
            <Flag className='mr-2' />
            Đăng ký ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
