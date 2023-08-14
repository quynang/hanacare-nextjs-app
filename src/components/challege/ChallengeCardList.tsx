import ChallengeCard from '@/components/cards/ChallengeCard';
import { usePublicChallenges } from '@/hooks/usePublicChallenge';

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
type ChallengeCardListProps = {
  type: 'upcomming' | 'running' | 'finished';
};
const ChallengeCardList: React.FC<ChallengeCardListProps> = ({ type }) => {
  const { data, isLoading, isFetching } = usePublicChallenges({
    limit: 4,
    time: challegeTypeMapping[type],
  });

  if (isLoading) return null;

  if (!isLoading && !data.data?.items?.length) return null;

  return (
    <div>
      <div className='mb-8 text-2xl font-bold'>
        {titleChallengeTypeMapping[type]}
      </div>
      <div className='flex gap-6'>
        {(data?.data?.items || []).map((item: any, index: number) => (
          <ChallengeCard key={index} id={index} type={type} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ChallengeCardList;
