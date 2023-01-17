import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './Header.scss';
import logo from './assets/logo.png';

// icons
import { BsList, BsBell } from 'react-icons/bs';
import { RiVideoAddLine, RiMicFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header() {
  return (
    <header>
      <div className="header-left-logomenu">
        <BsList className="header-icon menu" size="24"></BsList>
        <a href="#" className="logo">
          <img src={logo} alt="youtube logo" />
          <sup>KR</sup>
        </a>
      </div>
      <div className="header-search">
        <form>
          <input type="text" placeholder="검색" />
          <button className="keyboard">
            <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="키보드" />
          </button>
        </form>
        <button className="header-search-zoombtn" id="tooltip-search">
          <IoSearchOutline className="header-icon search"></IoSearchOutline>
        </button>
        <Tooltip anchorId="tooltip-search" content="검색" className="tooltip" />
        <button className="header-search-voicebtn" id="tooltip-voice">
          <RiMicFill className="header-icon voice"></RiMicFill>
        </button>
        <Tooltip anchorId="tooltip-voice" content="음성으로 검색" className="tooltip" />
      </div>
      <div className="header-right-btns">
        <button id="tooltip-upload">
          <RiVideoAddLine className="header-icon"></RiVideoAddLine>
        </button>
        <Tooltip anchorId="tooltip-upload" content="만들기" className="tooltip" />
        <button id="tooltip-notice">
          <BsBell className="header-icon"></BsBell>
        </button>
        <Tooltip anchorId="tooltip-notice" content="알림" className="tooltip" />
        <button>
          <FaUserAlt className="header-icon user"></FaUserAlt>
        </button>
      </div>
    </header>
  );
}
