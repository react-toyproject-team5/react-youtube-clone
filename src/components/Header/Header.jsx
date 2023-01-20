import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.scss';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Components
import HeaderLogo from './headerLeftLogomenu';

// img and icons
import { BsBell } from 'react-icons/bs';
import { RiVideoAddLine, RiMicFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header({ setMenuDrop }) {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  // input 검색어
  const handleSumbit = (event) => {
    event.preventDefault();
    navigate(`results/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <>
      <header>
        <HeaderLogo setMenuDrop={setMenuDrop} />
        <div className={styles.headerSearch}>
          <form onSubmit={handleSumbit}>
            <div className={styles.inputWrap}>
              <input
                className="search-input"
                type="text"
                placeholder="검색"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
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
