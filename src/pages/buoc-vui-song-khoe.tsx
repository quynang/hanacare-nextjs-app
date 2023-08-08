import TargetIcon from '../assets/icons/target.svg';
import CupIcon from '../assets/icons/cup.svg';
import Seo from '@/components/Seo';

const TUTORIAL_STEPS = [
  {
    img: 'images/campaign/app-screen-step1.webp',
    title: 'Bước 01',
    description:
      'Mỗi cá nhân tự trang bị thiết bị di động có thể kết nối đồng bộ với ứng dụng HanaCare (App Store, Android).',
  },
  {
    img: 'images/campaign/app-screen-step2.webp',
    title: 'Bước 02',
    description:
      'Đăng ký tham gia trực tuyến thử thách trên ứng dụng HanaCare để ghi nhận kết quả.',
  },
  {
    img: 'images/campaign/app-screen-step3.webp',
    title: 'Bước 03',
    description:
      'Bật cho phép đồng bộ dữ liệu với ứng dụng tracking trên thiết bị (iOS: Health; Android: Fit)',
  },
];

const PAGE_SECTIONS = [
  {
    title: 'CÁCH THỨC THAM GIA',
    scrollTarget: 'el-1',
  },
  {
    title: 'THỂ LỆ THỬ THÁCH',
    scrollTarget: 'el-2',
  },
  {
    title: 'HÌNH THỨC TỔ CHỨC',
    scrollTarget: 'el-3',
  },
  {
    title: 'HƯỚNG DẪN ĐỒNG BỘ VỚI THIẾT BỊ',
    scrollTarget: 'el-4',
  },
];
export default function BuocVuiSongKhoe() {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Seo title='Bước vui, Sống khỏe' />
      <div className='bg-[#011C3A]'>
        <section className='relative'>
          <img
            className='hidden lg:block'
            src={'images/campaign/campaign-banner.webp'}
          />
          <img
            className='w-full bg-[#329DFF] lg:hidden'
            src={'images/campaign/campaign-banner-mobile.webp'}
          />
          <div className='hidden lg:block'>
            <div className='absolute bottom-[11%] left-[8%] flex w-[13%] flex-col'>
              <a
                href='https://play.google.com/store/apps/details?id=com.hanacare'
                target='blank'
              >
                <img className='w-full' src='images/campaign/google-play.png' />
              </a>
              <a
                href='https://apps.apple.com/us/app/hanacare/id1670385640'
                target='blank'
              >
                <img
                  className='mt-[16px] w-full'
                  src='images/campaign/app-store.png'
                />
              </a>
            </div>
            <span className='absolute bottom-[18%] left-[23%] text-[16px] font-bold text-white'>
              Hoặc
            </span>
            <div className='absolute bottom-[11%] left-[27%] flex w-[8.6%] flex-col gap-4'>
              <img src='images/campaign/qr-code.png' />
            </div>
          </div>
          <div className='absolute bottom-[32px] lg:hidden'>
            <div className='flex flex-col items-center justify-center px-4'>
              <a
                href='https://play.google.com/store/apps/details?id=com.hanacare'
                target='blank'
              >
                <img
                  className='cursor-pointer'
                  src='images/campaign/google-play-btn-mobile.png'
                />
              </a>
              <a
                href='https://apps.apple.com/us/app/hanacare/id1670385640'
                target='blank'
              >
                <img
                  className='mt-[16px] cursor-pointer'
                  src='images/campaign/apple-store-btn-mobile.png'
                />
              </a>

              <span className='py-[20px] text-center font-bold text-white'>
                Hoặc
              </span>
              <div className=''>
                <img src='images/campaign/qr-code.png' />
              </div>
            </div>
          </div>
        </section>
        <section className='flex gap-[24px] overflow-auto  bg-[url("/images/campaign/sections-bg.webp")] bg-cover px-6 py-[72px] lg:justify-center lg:px-[140px]'>
          {PAGE_SECTIONS.map((s, index) => (
            <div
              key={index}
              onClick={() => scrollToElement(s.scrollTarget)}
              className='relative flex h-[272px] w-[272px] min-w-[272px] cursor-pointer items-center justify-center rounded-xl border-2 border-[#329DFF] bg-[#001C354D] p-2 hover:bg-[#329DFF]'
            >
              <div className='text-center text-[22px] font-bold text-white'>
                {s.title}
              </div>
            </div>
          ))}
        </section>
        <section className='bg-[url("/images/campaign/bg-1.png")] px-4 py-[72px] lg:py-[140px] lg:px-[116px]'>
          <div className='flex flex-col justify-center text-center'>
            <h1 className='mb-[40px] text-[32px] font-bold text-white lg:text-[56px]'>
              Ý NGHĨA THỬ THÁCH
            </h1>
            <div className='relative flex justify-center rounded-xl border-2 border-[#329DFF] bg-[#212225] p-[14px] pb-[131px] lg:px-[48px] lg:pt-[48px] lg:pb-[117px]'>
              <div className='max-w-[1000px] text-center text-sm text-white	 lg:text-2xl'>
                Đi bộ luôn là một hoạt động được khuyến khích tập luyện với mọi
                lứa tuổi. Việc đi bộ không chỉ giúp nâng cao thể trạng, mà còn
                cải thiện nhiều về tinh thần. Chính vì vậy, HanaCare đã tạo ra
                chiến dịch "BƯỚC VUI, SỐNG KHOẺ" với mong muốn có thể kêu gọi
                cộng đồng tạo dựng một thói quen tốt trong việc đi bộ mỗi ngày,
                đồng thời trở thành nguồn động lực thúc đẩy với những cá nhân
                đang mãi chần chừ với bộ môn này.
              </div>
              <div className='absolute bottom-0'>
                <img
                  className='h-[58px] lg:h-[73px]'
                  src='images/campaign/date-block.webp'
                />
                <div className='absolute left-[17%] bottom-[20%] text-[20px] font-bold text-white lg:bottom-[10%] lg:text-[32px]'>
                  14/08/2023 - 23/08/2023
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center bg-[#0D2744] bg-[url("/images/campaign/bg-noise.webp")]  px-4 py-[72px]'>
          <h1 className='mb-[40px] text-[32px] font-bold text-white lg:text-[56px]'>
            NHÀ TÀI TRỢ
          </h1>
          <div className='flex flex-wrap justify-center gap-[67px]'>
            <img className='w-[180px]' src='images/campaign/lhd-logo.webp' />
            <img className='w-[180px]' src='images/campaign/fujiwa-logo.webp' />
            <img
              className='w-[180px]'
              src='images/campaign/the-fox-logo.webp'
            />
            <img
              className='w-[180px]'
              src='images/campaign/miss-minh-uyen.webp'
            />
          </div>
        </section>
        <section
          id='el-1'
          className='relative flex flex-col items-center bg-[url("/images/campaign/bg-walking.png")] bg-center bg-no-repeat px-4 py-[72px] lg:px-[116px] lg:py-[140px]'
        >
          <img
            className='absolute left-0 top-1/2 hidden -translate-y-1/2 transform lg:block'
            src='images/campaign/visual-left.webp'
          />
          <h1 className='mb-[40px] text-[32px] font-bold text-white lg:text-[56px]'>
            CÁCH THỨC THAM GIA
          </h1>
          <div className='flex max-w-[1080px] flex-col items-center gap-[64px] text-center lg:flex-row lg:gap-[30px]'>
            {TUTORIAL_STEPS.map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img className='w-[312px]' src={item.img} />
                <div>
                  <p className='mb-[12px] text-[32px] font-bold text-white lg:mb-6'>
                    {item.title}
                  </p>
                  <span className='text-center text-[16px] text-white lg:text-[18px]'>
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <a
            href='https://hanacare.page.link/buoc-vui-song-khoe-challenge'
            className='mt-[40px] bg-[#FF823D] px-[24px] py-[16px] text-[24px] font-bold text-white'
          >
            THAM GIA NGAY
          </a>
          <img
            className='absolute right-0 top-1/2 hidden -translate-y-1/2 transform lg:block'
            src='images/campaign/visual-right.webp'
          />
        </section>
        <section
          id='el-4'
          className='relative flex flex-col items-center justify-center bg-bottom bg-no-repeat px-4 py-[72px] text-center lg:px-[116px] lg:py-[140px]'
        >
          <div className='flex max-w-[1208px] flex-col items-center justify-center'>
            <h1 className='mb-[40px] text-[32px] font-bold text-white lg:text-[56px]'>
              HƯỚNG DẪN ĐỒNG BỘ VỚI ỨNG DỤNG TRACKING TRÊN THIẾT BỊ
            </h1>
            <p className='mb-[40px] text-center text-[16px] text-white lg:text-[24px]'>
              Trên HanaCare App Đăng nhập lần đầu: Ứng dụng sẽ xin yêu cầu truy
              cập vào dữ liệu sức khỏe trên thiết bị của bạn. Nhấp "Cho phép" để
              đồng bộ.
            </p>
            <div className='flex w-full flex-col items-center justify-around gap-[40px] text-center lg:flex-row lg:gap-[30px]'>
              <div className='lg:w-[34%]'>
                <img src='images/campaign/android-connect.webp' />
                <p className='text-[32px] font-bold text-[#FF823D]'>
                  Thiết bị Android
                </p>
              </div>
              <div className='lg:w-[34%]'>
                <img src='images/campaign/ios-connect.webp' />
                <p className='text-[32px] font-bold text-[#FF823D]'>
                  Thiết bị iOS
                </p>
              </div>
            </div>
            <div className='mt-[40px] text-[22px] text-white'>
              Lưu ý: Hành trình của bạn sẽ được hệ thống tính điểm thông qua
              việc đồng bộ với Google Fit (đối với Android), Health Fit (đối với
              iOS), hãy nhớ bật đồng bộ với các ứng dụng trên để tham gia thử
              thách bạn nhé!
            </div>
          </div>
        </section>
        <section
          id='el-2'
          className='flex scroll-mt-[100px] flex-col items-center justify-center bg-[url("/images/campaign/bg-pattern-3.png")] bg-center bg-no-repeat px-4 text-center'
        >
          <img
            className='mb-[46px] w-full'
            src='images/campaign/visual-line-top.png'
          />
          <h1 className='mb-[40px] text-center text-[32px] font-bold text-white lg:text-[56px]'>
            THỂ LỆ THỬ THÁCH
          </h1>
          <div className='mb-[24px] skew-x-[-15deg] bg-[#FF823D] p-[8px] px-6 text-[14px] font-[500] text-white lg:skew-x-[-30deg] lg:p-[12px] lg:text-[24px]'>
            <div className='skew-x-[15deg] lg:skew-x-[30deg]'>
              Người tham gia đi bộ liên tiếp 10 ngày với mỗi ngày ít nhất 1km.
            </div>
          </div>
          <div className='flex max-w-[936px] flex-col gap-[16px] text-left'>
            <div className='flex'>
              <TargetIcon className='mr-4 text-[45px]' />
              <div>
                <span className='mr-2 text-[16px] font-[500] text-[#FF823D] lg:text-[24px]'>
                  Mục tiêu:
                </span>
                <span className='text-[16px] font-[500] text-white lg:text-[24px]'>
                  BTC sẽ trao quà cho tất cả người chơi đạt đủ điều kiện chương
                  trình và có phần thưởng cho TOP 80 với giá trị từ cao xuống
                  thấp.
                </span>
              </div>
            </div>
            <div className='flex'>
              <CupIcon className='mr-4 text-[45px]' />
              <div>
                <span className='text-[16px]  font-[500] text-white lg:text-[24px]'>
                  Kết quả xếp hạng là tổng số Km mà các thành viên tích lũy
                  trong suốt thời gian diễn ra chương trình thông qua cập nhật
                  của hệ thống.
                </span>
              </div>
            </div>
          </div>
          <img
            className='mt-[72px] w-full'
            src='images/campaign/visual-line-bottom.png'
          />
        </section>
        <section id='el-3' className='flex justify-center'>
          <div className='my-[140px] flex w-full max-w-[1208px] flex-col items-center justify-center px-6'>
            <h1 className='mb-[40px] text-[32px] font-bold text-white lg:text-[56px]'>
              HÌNH THỨC TỔ CHỨC
            </h1>
            <div className='flex w-full max-w-[952px] flex-col justify-between gap-[120px] lg:flex-row lg:gap-10'>
              <div className='lg:max-w-[416px]'>
                <img
                  className='w-full'
                  src='images/campaign/app-on-hand.webp'
                ></img>
                <div className='tex-base mt-[24px] font-[500] text-white lg:text-[24px]'>
                  Sự kiện được tổ chức hoàn toàn miễn phí dành cho tất cả mọi
                  người thích vận động và mong muốn rèn luyện để cải thiện sức
                  khỏe.
                </div>
              </div>
              <div className='lg:max-w-[416px]'>
                <img
                  className='w-full'
                  src='images/campaign/app-location.webp'
                ></img>
                <div className='mt-[24px] text-base font-[500] text-white lg:text-[24px]'>
                  Các cá nhân có thể tự lựa chọn thời gian, địa điểm phù hợp để
                  tham gia.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
