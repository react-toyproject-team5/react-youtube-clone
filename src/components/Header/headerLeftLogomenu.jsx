import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.scss';

// Components
import SidebarModal from '../Sidebar/SidebarModal';

// img and icons
import logo from './assets/logo.png';
import { BsList } from 'react-icons/bs';

export default function HeaderLeftLogomenu({ setMenuDrop }) {
  const [modal, setModal] = useState(false);

  // 리액트 반응형
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1300 });
    return isDesktop ? children : null;
  };
  const TabletAndMobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 1299 });
    return isTablet ? children : null;
  };

  // 데스크탑 사이즈, 메뉴 버튼 클릭
  const menuBtnClick = (e) => {
    setMenuDrop((e) => !e);
  };

  // 태블릿과 모바일 사이즈, 메뉴 버튼 클릭
  const printModal = (e) => {
    setModal((e) => !e);
  };

  return (
    <div className={styles.headerLeftLogomenu}>
      <Desktop>
        <BsList className={styles.headerIcon} size="24" onClick={menuBtnClick} />
      </Desktop>
      <TabletAndMobile>
        <BsList className={styles.headerIcon} size="24" onClick={printModal} />
        {modal ? <SidebarModal setModal={setModal} /> : null}
      </TabletAndMobile>
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="youtube logo" />
        <sup>KR</sup>
      </Link>
    </div>
  );
}
