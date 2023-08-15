import { useChallegeRanking } from '@/hooks/useChallengeRanking';

type ChallengeTop3UserAvatarProps = {
  challengeId: number;
};

const ChallengeTop3UserAvatar: React.FC<ChallengeTop3UserAvatarProps> = ({
  challengeId,
}) => {
  const { data: rankingData, isLoading } = useChallegeRanking(challengeId);

  if (isLoading) return null;

  if (!isLoading && !rankingData?.data?.length) return null;

  return (
    <div className='mr-1 flex -space-x-2'>
      {rankingData.data.map((item: any) => (
        <img
          className='h-6 w-6 rounded-full border-2 border-[#00B6FD] dark:border-gray-800'
          src={item.avatar}
          onError={(e) => (e.currentTarget.src = '/svg/fallback-avatar.svg')}
        />
      ))}
    </div>
  );
};

export default ChallengeTop3UserAvatar;
