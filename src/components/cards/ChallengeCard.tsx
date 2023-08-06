import Link from 'next/link';
import Calendar from '../../assests/icons/Calendar.svg';
import Flag from '../../assests/icons/flag.svg';

type ChallengeProps = {
  challegeType?: 'upcomming' | 'runing' | 'finished';
  id?: number;
};

const ChallengeCard: React.FC<ChallengeProps> = ({
  challegeType = 'upcomming',
  id,
}) => {
  return (
    <div className='flex h-[406px] w-[312px] flex-col rounded-2xl bg-white shadow-[0px_3px_24px_0px_#00000014]'>
      <img
        className='h-[144px] w-[312px] rounded-t-2xl object-cover'
        src={`https://source.unsplash.com/random/200x200?sig=${id}`}
        alt=''
      />
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h4 className='mb-2 font-bold'>Cuộc thi đọc sách về chữa lành</h4>
          <div className='align-center mb-4 flex text-slate-500'>
            <Calendar className='mr-2' />
            <span className='text-xs'>01/11/2022 - 31/11/2022</span>
          </div>
          <div className='h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
            <div
              className='h-1 rounded-full bg-[#75C905]'
              style={{ width: '45%' }}
            ></div>
            {challegeType === 'upcomming' && (
              <div className='mt-1 text-xs text-[#00B6FD]'>
                Sự kiện sắp diễn ra
              </div>
            )}
            {challegeType === 'runing' && (
              <div className='mt-1 flex justify-between text-xs'>
                <div>
                  <span className='mr-1 text-[#00B6FD]'>+1,145</span>
                  <span>người tham gia</span>
                </div>
                <div>
                  <span className='mr-1 text-[#75C905]'>4</span>
                  <span>ngày kết thúc</span>
                </div>
              </div>
            )}
            {challegeType === 'finished' && (
              <div className='mt-2 flex items-center'>
                <div className='mr-1 flex -space-x-2'>
                  <img
                    className='h-6 w-6 rounded-full border-2 border-[#00B6FD] dark:border-gray-800'
                    src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                    alt=''
                  />
                  <img
                    className='h-6 w-6 rounded-full border-2 border-[#00B6FD] dark:border-gray-800'
                    src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                    alt=''
                  />
                  <img
                    className='h-6 w-6 rounded-full border-2 border-[#00B6FD] dark:border-gray-800'
                    src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
                    alt=''
                  />
                  <img
                    className='h-6 w-6 rounded-full border-2 border-[#00B6FD] dark:border-gray-800'
                    src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                    alt=''
                  />
                </div>
                <div className='text-xs'>
                  <span className='mr-1 text-[#00B6FD]'>+1,145</span>
                  <span>người tham gia</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {challegeType === 'finished' && (
          <button
            type='button'
            className='mr-2 mb-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 '
          >
            Chi tiết
          </button>
        )}
        {challegeType === 'upcomming' && (
          <button
            type='button'
            className='dark:focus:ring-[#75C905]/55 mr-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-[#75C905] px-5 py-2.5   text-center text-white hover:bg-[#75C905]/90 focus:outline-none focus:ring-4 focus:ring-[#75C905]/50'
          >
            <Flag className='mr-2' />
            Đăng ký ngay
          </button>
        )}
        {challegeType === 'runing' && (
          <button
            type='button'
            className='dark:focus:ring-[#75C905]/55 mr-2 mb-2 inline-flex w-full items-center justify-center rounded-lg bg-[#00B6FD] px-5 py-2.5   text-center text-white hover:bg-[#00B6FD]/90 focus:outline-none focus:ring-4 focus:ring-[#00B6FD]/50'
          >
            <Flag className='mr-2' />
            Đăng ký ngay
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
