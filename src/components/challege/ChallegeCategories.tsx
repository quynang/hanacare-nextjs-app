import { useChallegeCategories } from '@/hooks/useChallengeCategories';

const ChallengeCategories: React.FC<any> = () => {
  const { data, isLoading, isFetching } = useChallegeCategories();

  return (
    <div className='flex gap-5'>
      <button className='rounded-lg border border-primary bg-transparent py-2 px-4 font-semibold text-primary hover:border-transparent hover:bg-primary hover:text-white'>
        Tất cả
      </button>
      {data?.data?.items.map((item: any) => (
        <button className='rounded-lg border border-primary bg-transparent py-2 px-4 font-semibold text-primary hover:border-transparent hover:bg-primary hover:text-white'>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ChallengeCategories;
