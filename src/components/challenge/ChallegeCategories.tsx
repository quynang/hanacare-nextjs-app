import { useChallegeCategories } from '@/hooks/useChallengeCategories';
import { twMerge } from 'tailwind-merge';

const ChallengeCategories: React.FC<any> = ({ activeCategory, onClick }) => {
  const { data, isLoading, isFetching } = useChallegeCategories();

  return (
    <div className='flex gap-5'>
      <button
        onClick={() => onClick({})}
        className={twMerge(
          'rounded-lg border border-primary bg-transparent py-2 px-4 font-semibold text-primary hover:border-transparent hover:bg-primary hover:text-white',
          !activeCategory && 'border-transparent bg-primary text-white'
        )}
      >
        Tất cả
      </button>
      {data?.data?.items.map((item: any) => (
        <button
          onClick={() => onClick(item)}
          className={twMerge(
            'rounded-lg border border-primary bg-transparent py-2 px-4 font-semibold text-primary hover:border-transparent hover:bg-primary hover:text-white',
            activeCategory === item.id &&
              'border-transparent bg-primary text-white'
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ChallengeCategories;
