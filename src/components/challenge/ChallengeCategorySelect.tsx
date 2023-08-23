import { useChallegeCategories } from '@/hooks/useChallengeCategories';
import Select from '@/components/Select';

const ChallengeCategorieSelect: React.FC<any> = ({
  activeCategory,
  onClick,
}) => {
  const { data, isLoading } = useChallegeCategories();
  if (isLoading) return null;

  const options = [
    { label: 'Tất cả', value: 0 },
    ...(data?.data?.items || []).map((item: any) => ({
      value: item.id,
      label: item.name,
    })),
  ];

  const activeCategoryItem = options.find(
    (item: any) => item.value === activeCategory
  ) || options[0]

  const handleOnChange = (opt: any) => {
    onClick(opt.value);
  };

  return (
    <Select
      value={activeCategoryItem}
      onChange={handleOnChange}
      options={options}
    />
  );
};

export default ChallengeCategorieSelect;
