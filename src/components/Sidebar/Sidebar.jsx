import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components
import SidebarLarge from './SidebarLarge';
import SidebarSmall from './SidebarSmall';
import SidebarModal from './SidebarModal';

export default function Sidebar({ menuDrop, setMenuDrop }) {
  console.log(menuDrop);

  // 리액트 반응형
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1300 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 792, maxWidth: 1299 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 791 });
    return isMobile ? children : null;
  };

  return (
    <>
      {menuDrop ? (
        //메뉴 클릭시 true
        <>
          <Desktop>
            <SidebarSmall />
          </Desktop>
          <Tablet>
            <SidebarModal setMenuDrop={setMenuDrop} />
            <SidebarSmall />
          </Tablet>
          <Mobile>
            <SidebarModal setMenuDrop={setMenuDrop} />
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
