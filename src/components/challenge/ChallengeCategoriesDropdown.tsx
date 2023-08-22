import Select from '@/components/Select';
import { useChallegeCategories } from '@/hooks/useChallengeCategories';
import { BsChevronDown } from 'react-icons/bs';

const ChallengeCategoriesDropDown: React.FC<any> = ({
  activeCategory,
  onClick,
}) => {
  const { data, isLoading, isFetching } = useChallegeCategories();
  if (isLoading) return null;

  const activeCategoryItem = (data?.data?.items || []).find(
    (item: any) => item.id === activeCategory
  );

  const options = (data?.data?.items || []).map((item: any) => ({
    value: item.id,
    label: item.name,
  }));

  return <Select options={options} />;
};

export default ChallengeCategoriesDropDown;
