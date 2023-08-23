import { FaAngleRight } from 'react-icons/fa'

type SeeMoreCardProps = {
  width?: number
  onSeeAll: () => void
}

const SeeAllCard: React.FC<SeeMoreCardProps> = ({ width, onSeeAll }) => {

  const cardWidthClass = width ? `w-[${width}px]` : 'w-full'

  return (
    <div className={`m-x-4 flex h-[406px] ${cardWidthClass} relative bg-[#00B6FD33] bg-opacity-50 p-8  flex items-center justify-center rounded-2xl  shadow-[0px_3px_24px_0px_#00000014]`}>
      <div className="absolute inset-0 h-full z-[-1] bg-contain bg-center" style={{ backgroundImage: 'url("/images/happycare-bg.png")' }} />
      <button onClick={onSeeAll} className="bg-white text-primary font-medium flex gap-2 items-center rounded-lg py-[12px] px-[16px]">
        Xem tất cả
        <FaAngleRight className='fill-white rounded-full bg-primary flex justify-center' />
      </button>
    </div>

  )
}

export default SeeAllCard
