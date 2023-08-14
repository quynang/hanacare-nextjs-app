import { hanacareApiGateway } from '@/constant/env';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const defaultParams: any = {
  limit: 10,
  time: 1,
};

const fetchPublicChallenges = async (params = defaultParams) => {
  const { data } = await axios.get(
    `${hanacareApiGateway}/challenge_api_service/api/v1/public/campaigns/list`,
    {
      params: params,
    }
  );
  return data;
};

const usePublicChallenges = (params = defaultParams) => {
  return useQuery({
    queryKey: ['challenge/public-challenges', params],
    queryFn: () => fetchPublicChallenges(params),
  });
};

export { usePublicChallenges, fetchPublicChallenges };
