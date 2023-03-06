import Logo from '~/images/logo-hanacare.png';
import Image from 'next/image';

const footerItems = [
  {
    title: 'Dành cho Doanh nghiệp',
    href: '/danh-cho-doanh-nghiep',
  },
  {
    title: 'Tính năng',
    href: '/tinh-nang',
  },
  {
    title: 'Blog HanaCare',
    href: '/blog',
  },
  {
    title: 'Về HanaCare ',
    href: '/about-hanacare',
  },
  {
    title: 'Chính sách Bảo mật thông tin ',
    href: '/chinh-sach-bao-mat-thong-tin',
  },
  {
    title: 'Điều khoản dịch vụ',
    href: '/dieu-khoan-dich-vu',
  },
];

const FooterSection = () => {
  return (
    <footer className='footer-area relative  pt-20 xl:pt-28'>
      <div className='footer-bg  absolute bottom-0 left-0 right-0 block h-[calc(100%-11.4rem)] w-full bg-blue-50'></div>
      <div className='container mx-auto'>
        <div className='relative z-10 rounded-lg border bg-white p-8 md:p-14'>
          <div className='footer-list'>
            <ul className='grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6'>
              {footerItems.map((item, index) => (
                <li key={index} className='lg:col-span-3'>
                  <p className=' text-base font-normal text-gray-800 hover:text-blue-800  '>
                    {' '}
                    <a className='wavy-hover' href={item.href}>
                      {item.title}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='relative z-10 items-center justify-center pb-14 text-center md:flex lg:text-left'>
          <div className='py-8'>
            <div className='container mx-auto'>
              <div className='flex flex-col items-center justify-center'>
                <Image width={80} src={Logo} alt='HanaCare Logo' />
                <div className='text-center text-sm font-normal text-gray-600'>
                  <p className='mt-5 text-gray-600'>
                    HanaCare Thuộc công ty Cổ phần Công nghệ LHD
                  </p>
                  <p className='text-gray-600'>
                    356/34A Xô Viết Nghệ Tĩnh, Phường 25, Quận Bình Thạnh, Thành
                    phố Hồ Chí Minh, Việt Nam
                  </p>
                  <p className=''>HanaCare Super App © 2023</p>
                  <a
                    className='text-blue-500 visited:text-purple-600 hover:text-blue-800'
                    href='mailto: social@hanacare.vn'
                  >
                    social@hanacare.vn
                  </a>
                </div>
                <ul className='mt-2 inline-flex items-center gap-2 text-center lg:text-right'>
                  <li>
                    <a
                      className='group flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 duration-300  hover:bg-white '
                      href='https://www.facebook.com/hanacaresuperapp'
                    >
                      <svg
                        className=' text-gray-600 group-hover:text-blue-800 '
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 16 16'
                      >
                        {' '}
                        <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />{' '}
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='group flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 duration-300  hover:bg-white '
                      href='https://www.tiktok.com/@hana_care'
                    >
                      <svg
                        className=' text-gray-600 group-hover:text-blue-800 '
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        viewBox='0 0 512 512'
                      >
                        <path d='M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z' />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='group flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 duration-300  hover:bg-white '
                      href='https://www.youtube.com/channel/UC0BMLCXk9DwmciWtd20RLlA'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className=' text-gray-600 group-hover:text-blue-800 '
                        viewBox='0 0 16 16'
                      >
                        {' '}
                        <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z' />{' '}
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className='group flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 duration-300  hover:bg-white '
                      href='https://www.linkedin.com/company/hanacare-super-app/'
                    >
                      <svg
                        className=' text-gray-600 group-hover:text-blue-800 '
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clip-rule='evenodd'
                          d='M5.2003 4.8783H7.8001V6.1733C8.1746 5.4285 9.135 4.7593 10.5777 4.7593C13.3434 4.7593 14 6.2419 14 8.9621V14H11.2V9.5816C11.2 8.0325 10.8255 7.1589 9.8721 7.1589C8.5498 7.1589 8.0003 8.1004 8.0003 9.5809V14H5.2003V4.8783ZM0.399 13.881H3.199V4.7593H0.399V13.881ZM3.6001 1.785C3.6002 2.01969 3.55366 2.25206 3.46317 2.46861C3.37268 2.68516 3.24006 2.88156 3.073 3.0464C2.73448 3.38284 2.27627 3.57116 1.799 3.57C1.32257 3.56968 0.865418 3.38184 0.5264 3.0471C0.359948 2.8817 0.22777 2.68508 0.137441 2.4685C0.047111 2.25193 0.000405392 2.01966 0 1.785C0 1.3111 0.189 0.8575 0.5271 0.5229C0.86582 0.187711 1.32317 -0.000209448 1.7997 1.75185e-07C2.2771 1.75185e-07 2.7349 0.1883 3.073 0.5229C3.4104 0.8575 3.6001 1.3111 3.6001 1.785Z'
                          fill='currentcolor'
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a
          className='scroll-top-button fixed left-4 bottom-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-200 bg-white duration-300 hover:bg-blue-50'
          href='#'
        >
          <svg
            width='12'
            height='20'
            viewBox='0 0 12 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clip-rule='evenodd'
              d='M6 19.3326C5.82321 19.3326 5.65367 19.2624 5.52866 19.1374C5.40366 19.0124 5.33343 18.8428 5.33343 18.666L5.33343 2.94425L1.13935 7.13966C1.01418 7.26483 0.844425 7.33514 0.667415 7.33514C0.490406 7.33514 0.320646 7.26483 0.195481 7.13966C0.0703166 7.0145 4.17049e-09 6.84474 0 6.66773C-4.17049e-09 6.49072 0.0703166 6.32096 0.195481 6.1958L5.52807 0.863209C5.58998 0.801134 5.66354 0.751884 5.74452 0.718281C5.82551 0.684675 5.91232 0.667379 6 0.667379C6.08768 0.667379 6.17449 0.684675 6.25548 0.718281C6.33646 0.751884 6.41002 0.801134 6.47193 0.863209L11.8045 6.1958C11.9297 6.32096 12 6.49072 12 6.66773C12 6.84474 11.9297 7.0145 11.8045 7.13966C11.6794 7.26483 11.5096 7.33514 11.3326 7.33514C11.1556 7.33514 10.9858 7.26483 10.8607 7.13966L6.66657 2.94425L6.66657 18.666C6.66657 18.8428 6.59635 19.0124 6.47134 19.1374C6.34633 19.2624 6.17679 19.3326 6 19.3326Z'
              fill='#585F63'
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
