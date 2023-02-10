import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '~/images/logo-hanacare.png'

type HeaderProps = {
  className?: string
}

const menuItems = [
  {
    label: 'Về HanaCare',
    href: '#'
  },
  {
    label: 'Tính năng',
    href: '#'
  },
  {
    label: 'Đối tác',
    href: '#'
  },
  {
    label: 'Sự kiện',
    href: '#'
  },
  {
    label: 'Doành cho doanh nghiệp',
    href: '#'
  },
  {
    label: 'Blog HanaCare',
    href: '/blog'
  }
]

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${className ? className : ''} header-area top-0 left-0 right-0 py-4 lg:py-4 z-[250] bg-white max-h-24`} style={{ opacity: 1 }}>
      <div className="container mx-auto">
        <div className="flex items-center relative">
          <div className="header-logo flex-auto lg:flex-none">
            <Link className="pr-8 inline-block" href="/">
              <Image className="max-h-16 w-auto" src={Logo} alt="HanaCare Logo" />
            </Link>
          </div>
          <div className="bg-white lg:flex flex-1 items-center shadow-xl lg:shadow-none">
            <ul className="navbar-nav lg:flex items-center" style={{ opacity: 1 }}>
              {menuItems.map((item, index) =>
                <li key={index} style={{ opacity: 1 }}>
                  <Link className="text-base text-gray-800 hover:text-blue-600 font-medium block whitespace-nowrap px-5 py-2 lg:py-2" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;