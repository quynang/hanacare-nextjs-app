import { hanacareApiGateway } from '@/constant/env';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDetailPublicChallenge = async (id: number) => {
  const { data } = await axios.get(
    `${hanacareApiGateway}/challenge_api_service/api/v1/public/campaigns/${id}/detail`
  );
  return data;
};

const useDetailPublicChallenge = (id: number) => {
  return useQuery({
    queryKey: ['challenge/detail', id],
    queryFn: () => fetchDetailPublicChallenge(id),
  });
};

export { useDetailPublicChallenge, fetchDetailPublicChallenge };
