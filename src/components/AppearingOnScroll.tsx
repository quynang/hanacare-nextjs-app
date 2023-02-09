
import { useEffect, useState } from "react";
import React from "react";

type ApearringOnScrollProps = {
  children: (isShow: boolean) => React.ReactNode
  anchor: string
}

const AppearingOnScroll: React.FC<ApearringOnScrollProps> = ({ children, anchor }) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const anchorOffsetTopValue = document.getElementById(anchor)?.offsetTop || 0

    const calc = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > anchorOffsetTopValue) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', calc);

      return () => {
        window.removeEventListener('scroll', calc);
      };
    }

  }, [show])

  return (
    <>
      {children(show)}
    </>
  )

}

export default AppearingOnScroll;