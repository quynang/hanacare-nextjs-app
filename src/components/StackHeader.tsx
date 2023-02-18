
import Header from '@/components/layout/Header';
import AppearingOnScroll from '@/components/AppearingOnScroll';
import { useState } from 'react';
import Link from 'next/link';
import { menuItems } from '@/config/headerConfig';

const StackHeader = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleOpen = () => {
    setOpenMobileMenu(true)
    document.body.style.overflow = "hidden"
  }

  const handleClose = () => {
    setOpenMobileMenu(false)
    document.body.style.overflow = "auto"
  }

  const handleToggleMenu = () => {
    if (openMobileMenu) {
      handleClose()
    } else {
      handleOpen()
    }
  }

  return (
    <>
      <Header onClickMobileMenu={handleToggleMenu} />
      <div id="anchor-header" />
      <AppearingOnScroll anchor='anchor-header'>
        {(isShow: any) => <Header onClickMobileMenu={handleToggleMenu} className={`${isShow ? "mt-0" : '-mt-100'} ${openMobileMenu ? '' : 'header-shadow'} header-sticky`} />}
      </AppearingOnScroll>
      <div className={`${openMobileMenu ? 'flex' : 'hidden'} mobile-menu container mx-auto bg-white`}>
        <ul className="">
          {menuItems.map((item, index) =>
            <li onClick={handleClose} key={index} style={{ opacity: 1 }}>
              <Link className="text-base text-gray-800 hover:text-blue-600 font-medium block whitespace-nowrap py-2" href={item.href}>
                {item.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default StackHeader;