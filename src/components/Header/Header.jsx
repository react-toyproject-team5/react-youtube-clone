import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import styles from './Header.module.scss';
import logo from './assets/logo.png';

// icons
import { BsList, BsBell } from 'react-icons/bs';
import { RiVideoAddLine, RiMicFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header(drop) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  // input 검색어
  const getSearchValue = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
    navigate(`/results/${inputValue}`);
  };

  // 메뉴 버튼 클릭
  const menuBtnClick = (e) => {
    drop.setMenuDrop((e) => !e);
  };
  console.log(drop.menuDrop);

  return (
    <>
      <header>
        <div className={styles.headerLeftLogomenu}>
          <BsList className={styles.headerIcon} size="24" onClick={menuBtnClick} />
          <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="youtube logo" />
            <sup>KR</sup>
          </Link>
        </div>
        <div className={styles.headerSearch}>
          <form onSubmit={getSearchValue}>
            <div className={styles.inputWrap}>
              <input type="text" placeholder="검색" />
              <button className={styles.keyboard} type="button">
                <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="키보드" />
              </button>
            </div>
          </form>
          <button className={styles.headerSearchZoombtn} id="tooltip-search">
            <IoSearchOutline className={`${styles.headerIcon} ${styles.search}`} />
          </button>
          <Tooltip anchorId="tooltip-search" content="검색" className={styles.tooltip} />
          <button className={styles.headerSearchVoicebtn} id="tooltip-voice">
            <RiMicFill className={`${styles.headerIcon} ${styles.voice}`} />
          </button>
          <Tooltip anchorId="tooltip-voice" content="음성으로 검색" className={styles.tooltip} />
        </div>
        <div className={styles.headerRightBtns}>
          <button id="tooltip-upload">
            <RiVideoAddLine className={styles.headerIcon} />
          </button>
          <Tooltip anchorId="tooltip-upload" content="만들기" className={styles.tooltip} />
          <button id="tooltip-notice">
            <BsBell className={`${styles.headerIcon} ${styles.notice}`} />
          </button>
          <Tooltip anchorId="tooltip-notice" content="알림" className={styles.tooltip} />
          <button>
            <FaUserAlt className={`${styles.headerIcon} ${styles.user}`} />
          </button>
        </div>
      </header>
    </>
  );
}
