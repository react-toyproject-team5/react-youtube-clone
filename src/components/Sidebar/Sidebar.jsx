import React from 'react';
import './Sidebar.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineRestore, MdOutlineQueryBuilder, MdOutlineVideoLibrary } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';

export default function Sidebar() {
  return (
    <>
      <nav className="small-nav">
        <ul>
          <button>
            <RiHome5Fill className="sidebar-icon" size="24"></RiHome5Fill>홈
          </button>
          <button>
            <BsCollectionPlay className="sidebar-icon" size="24"></BsCollectionPlay>구독
          </button>
          <button>
            <MdOutlineVideoLibrary className="sidebar-icon" size="24"></MdOutlineVideoLibrary>보관함
          </button>
          <button>
            <MdOutlineRestore className="sidebar-icon" size="24"></MdOutlineRestore>시청기록
          </button>
          {/* <button>
          <AiOutlinePlaySquare></AiOutlinePlaySquare>내 동영상
        </button>
        <button>
          <MdOutlineQueryBuilder></MdOutlineQueryBuilder>나중에 볼 동영상
        </button>
        <button>
          <SlArrowDown></SlArrowDown>더보기
        </button> */}
        </ul>
      </nav>
      <nav className="large-nav">
        <ul>
          <button>
            <RiHome5Fill className="sidebar-icon" size="24"></RiHome5Fill>홈
          </button>
          <button>
            <BsCollectionPlay className="sidebar-icon" size="24"></BsCollectionPlay>구독
          </button>
          <button>
            <MdOutlineVideoLibrary className="sidebar-icon" size="24"></MdOutlineVideoLibrary>보관함
          </button>
          <button>
            <MdOutlineRestore className="sidebar-icon" size="24"></MdOutlineRestore>시청기록
          </button>
          {/* <button>
          <AiOutlinePlaySquare></AiOutlinePlaySquare>내 동영상
        </button>
        <button>
          <MdOutlineQueryBuilder></MdOutlineQueryBuilder>나중에 볼 동영상
        </button>
        <button>
          <SlArrowDown></SlArrowDown>더보기
        </button> */}
        </ul>
      </nav>
    </>
  );
}
