import ChallengeCard from '@/components/cards/ChallengeCard';
import { usePublicChallenges } from '@/hooks/usePublicChallenge';

const challegeTypeMapping = {
  upcomming: 2,
  running: 3,
  finished: 1,
};

type ChallengeCardListProps = {
  type: 'upcomming' | 'running' | 'finished';
};
const ChallengeCardList: React.FC<ChallengeCardListProps> = ({ type }) => {
  const time = challegeTypeMapping[type];

  const { data, isLoading, isFetching } = usePublicChallenges({
    limit: 4,
    time: time,
  });

  return (
    <div className='flex gap-5'>
      {(data?.data?.items || []).map((item: any, index: number) => (
        <ChallengeCard key={index} id={index} type={type} data={item} />
      ))}
    </div>
  );
};

export default ChallengeCardList;
