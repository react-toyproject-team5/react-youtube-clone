import React from 'react';
import './Sidebar.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdOutlineRestore } from 'react-icons/md';
import { MdOutlineQueryBuilder } from 'react-icons/md';
import { MdOutlineVideoLibrary } from 'react-icons/md';
// import { BsCollectionPlay } from 'react-icons/bs';
// import { BsCollectionPlay } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <button>
          <RiHome5Fill></RiHome5Fill>홈
        </button>
        <button>Shorts</button>
        <button>
          <BsCollectionPlay></BsCollectionPlay>구독
        </button>
        <button>
          <MdOutlineVideoLibrary></MdOutlineVideoLibrary>보관함
        </button>
        <button>
          <MdOutlineRestore></MdOutlineRestore>시청기록
        </button>
        <button>내 동영상</button>
        <button>
          <MdOutlineQueryBuilder></MdOutlineQueryBuilder>나중에 볼 동영상
        </button>
      </ul>
    </nav>
  );
}
