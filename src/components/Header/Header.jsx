import React from 'react';
import './Header.scss';

// icons
import { BsList, BsBell } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <div className="menu">
        <BsList className="header-icon" size="24"></BsList>
      </div>
      <div className="logo">
        <a href="#">
          <img src="#" alt="youtube logo" />
        </a>
      </div>
      <form>
        <input type="text" placeholder="검색" />
        <button>
          <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="키보드" />
        </button>
        <button>
          <img src="#" alt="search button" />
        </button>
      </form>
      <button>음성인식</button>
      <div>
        <button>
          <RiVideoAddLine className="header-icon" size="24"></RiVideoAddLine>
        </button>
        <button>
          <BsBell className="header-icon" size="24"></BsBell>알림
        </button>
        <button>
          <FaRegUserCircle className="header-icon user" size="32"></FaRegUserCircle>
        </button>
      </div>
    </header>
  );
}
