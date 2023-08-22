import { menuItems } from '@/config/headerConfig';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '~/images/logo-hanacare.png';

type HeaderProps = {
  className?: string;
  onClickMobileMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({ className, onClickMobileMenu }) => {
  return (
    <header
      className={`${
        className ? className : ''
      } header-area top-0 left-0 right-0 z-[250] max-h-24 bg-white py-4 lg:py-4`}
      style={{ opacity: 1 }}
    >
      <div className='container mx-auto'>
        <div className='relative flex items-center'>
          <div className='header-logo flex-auto lg:flex-none'>
            <Link className='inline-block pr-8' href='/'>
              <Image
                className='max-h-10 w-auto md:max-h-16'
                src={Logo}
                alt='HanaCare Logo'
              />
            </Link>
          </div>
          <div className='hidden flex-1 items-center bg-white shadow-xl lg:flex lg:shadow-none'>
            <ul
              className='navbar-nav items-center lg:flex'
              style={{ opacity: 1 }}
            >
              {menuItems.map((item, index) => (
                <li key={index} style={{ opacity: 1 }}>
                  <Link
                    className='block whitespace-nowrap px-5 py-2 text-base font-semibold text-gray-800 hover:text-blue-600 lg:py-2'
                    href={item.href}
                    shallow={true}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={onClickMobileMenu}
            className='mobile-toggle block items-center lg:hidden'
            aria-label='Menu Button'
          >
            <span className='bg-gray-800'></span>
            <span className='bg-gray-800'></span>
            <span className='bg-gray-800'></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
