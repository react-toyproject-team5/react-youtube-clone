import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src="#" alt="youtube logo" />
        </a>
      </div>
      <form>
        <input type="text" placeholder="검색" />
        <button>키보드</button>
        <button>
          <img src="#" alt="search button" />
        </button>
      </form>
      <button>음성인식</button>
      <div>
        <button>영상</button>
        <button>알림</button>
        <button>user</button>
      </div>
    </header>
  );
}
