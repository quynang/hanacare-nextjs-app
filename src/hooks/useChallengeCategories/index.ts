import { hanacareApiGateway } from '@/constant/env';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchChallengeCategories = async () => {
  const { data } = await axios.get(
    `${hanacareApiGateway}/challenge_api_service/api/v1/public/categories/list?limit=10`
  );
  return data;
};

const useChallegeCategories = () => {
  return useQuery({
    queryKey: ['challenge/categories'],
    queryFn: () => fetchChallengeCategories(),
  });
};

export { useChallegeCategories, fetchChallengeCategories };
