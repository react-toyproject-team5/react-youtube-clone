import React from 'react';
import './Header.scss';
import logo from './assets/logo.png';

// icons
import { BsList, BsBell } from 'react-icons/bs';
import { RiVideoAddLine, RiMicFill } from 'react-icons/ri';
import { FaRegUserCircle, FaUserAlt } from 'react-icons/fa';
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
        <button className="header-search-zoombtn">
          <IoSearchOutline className="header-icon search"></IoSearchOutline>
        </button>
        <button className="header-search-voicebtn">
          <RiMicFill className="header-icon voice"></RiMicFill>
        </button>
      </div>
      <div className="header-right-btns">
        <button>
          <RiVideoAddLine className="header-icon"></RiVideoAddLine>
        </button>
        <button>
          <BsBell className="header-icon"></BsBell>
        </button>
        <button>
          <FaUserAlt className="header-icon user"></FaUserAlt>
        </button>
      </div>
    </header>
  );
}
