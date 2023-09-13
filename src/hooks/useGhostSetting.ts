import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchGhostSetting = async () => {
  const { data } = await axios.get(
    `https://ghost.hanacare.vn/ghost/api/content/settings?key=942efd06374ce7156d0bf617c4`
  );
  return data;
};

const useGhostSettings = () => {
  return useQuery({
    queryKey: ['ghost/settings'],
    queryFn: () => fetchGhostSetting(),
  });
};

export { useGhostSettings, fetchGhostSetting };
