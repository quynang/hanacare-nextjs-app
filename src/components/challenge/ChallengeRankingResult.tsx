import { useChallegeRanking } from '@/hooks/useChallengeRanking';
import { twMerge } from 'tailwind-merge';

type ChallengeRankingResultProps = {
  type: 'today' | 'final';
  challengeId: number;
};

const ChallengeRankingResult: React.FC<ChallengeRankingResultProps> = ({
  type,
  challengeId,
}) => {
  const { data, isLoading } = useChallegeRanking(challengeId, {
    type: type === 'today' ? 2 : 1,
  });

  const rank1 = data?.data?.find((item: any) => item.rank === 1);
  const rank2 = data?.data?.find((item: any) => item.rank === 2);
  const rank3 = data?.data?.find((item: any) => item.rank === 3);

  if (isLoading)
    return (
      <div role='status'>
        <svg
          aria-hidden='true'
          className='mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <span className='sr-only'>Loading...</span>
      </div>
    );

  return (
    <div className='relative'>
      <div className='absolute grid h-full w-full grid-cols-3 gap-4'>
        {!isLoading && (
          <>

            <div className='mt-[12%]'>
              {rank2 &&
                <div className='flex  flex-col items-center justify-center'>
                  <img
                    className='flex md:h-[96px] md:w-[96px] w-[64px]  h-[64px] rounded-full border-4 border-[#7186A9]'
                    src={rank2?.avatar}
                    onError={(e) =>
                      (e.currentTarget.src = '/svg/fallback-avatar.svg')
                    }
                  />
                  <div className='mt-2 font-medium text-center'>{rank2?.name}</div>
                </div>
              }
            </div>
            <div>
              {rank1 &&
                <div className='flex flex-col items-center justify-center'>
                  <img
                    className='flex md:h-[96px] md:w-[96px] w-[64px]  h-[64px] rounded-full border-4 border-[#FFDC62]'
                    src={rank1?.avatar}
                    onError={(e) =>
                      (e.currentTarget.src = '/svg/fallback-avatar.svg')
                    }
                  />
                  <div className='mt-2 font-medium text-center'>{rank1?.name}</div>
                </div>
              }
            </div>
            <div className='mt-[12%]'>
              {rank3 &&
                <div className='flex  flex-col items-center justify-center'>
                  <img
                    className='flex  md:h-[96px] md:w-[96px] w-[64px]  h-[64px] rounded-full border-4 border-[#7186A9]'
                    src={rank3?.avatar}
                    onError={(e) =>
                      (e.currentTarget.src = '/svg/fallback-avatar.svg')
                    }
                  />
                  <div className='mt-2 font-medium  text-center'>{rank3?.name}</div>
                </div>
              }
            </div>
          </>
        )}
      </div>
      {type === 'today' && <img className='pt-[50px] md:pt-0' src='/images/today-ranking-block.png'></img>}
      {type === 'final' && <img className='pt-[50px] md:pt-0' src='/images/final-ranking-block.png'></img>}
      <div
        className={twMerge(
          'absolute md:bottom-[7%] bottom-[5%] grid w-full grid-cols-3 gap-4 font-medium',
          type === 'today' ? 'text-primary' : 'text-white'
        )}
      >
        <div className='flex flex-col items-center justify-center'>
          {rank2 ? rank2.attribute_value + " bước" : ""}
        </div>
        <div className='flex  flex-col items-center justify-center'>
          {rank1 ? rank1.attribute_value + " bước" : ""}
        </div>
        <div className='flex  flex-col items-center justify-center'>
          {rank3 ? rank3.attribute_value + " bước" : ""}
        </div>
      </div>
    </div>
  );
};

export default ChallengeRankingResult;
