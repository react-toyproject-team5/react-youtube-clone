import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SidebarLarge from './SidebarLarge';
import SidebarSmall from './SidebarSmall';

export default function Sidebar({ drop }) {
  // 리액트 반응형
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1300 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 792 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 791 });
    return isMobile ? children : null;
  };

  console.log(drop);
  return (
    <>
      {drop ? (
        //메뉴 클릭시 true
        <>
          <Desktop>
            <SidebarSmall />
          </Desktop>
          <Tablet>
            <SidebarLarge />
          </Tablet>
          <Mobile>
            <SidebarLarge />
          </Mobile>
        </>
      ) : (
        //메뉴 클릭 전 또는 클릭 취소 false
        <>
          <Desktop>
            <SidebarLarge />
          </Desktop>
          <Tablet>
            <SidebarSmall />
          </Tablet>
          <Mobile></Mobile>
        </>
      )}
    </>
  );
}
