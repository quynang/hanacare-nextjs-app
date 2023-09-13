import { hanacareApiGateway } from '@/constant/env';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type ApiParams = {
  type?: number;
};

const fetchChallengeRanking = async (
  challengeId: number,
  params?: ApiParams
) => {
  const { data } = await axios.get(
    `${hanacareApiGateway}/challenge_api_service/api/v1/public/campaigns/${challengeId}/participant_rankings`,
    {
      params: params,
    }
  );
  return data;
};

const useChallegeRanking = (challengeId: number, params?: ApiParams) => {
  return useQuery({
    queryKey: ['challenge/ranking', challengeId, params].filter(
      (item) => !!item
    ),
    queryFn: () => fetchChallengeRanking(challengeId, params),
  });
};

export { useChallegeRanking, fetchChallengeRanking };
