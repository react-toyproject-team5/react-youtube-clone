import React from 'react';
import styles from './Sidebar.module.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay, BsLightbulb, BsFlag, BsInfoSquare } from 'react-icons/bs';
import { MdOutlineRestore, MdOutlineQueryBuilder, MdOutlineVideoLibrary } from 'react-icons/md';
import { AiOutlinePlaySquare, AiOutlineSetting } from 'react-icons/ai';
import { SlArrowDown } from 'react-icons/sl';
import { HiOutlineFire } from 'react-icons/hi2';
import { IoMusicalNoteOutline, IoGameControllerOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { BiMovie } from 'react-icons/bi';
import { CiStreamOn, CiTrophy } from 'react-icons/ci';

export default function SidebarLarge() {
  return (
    <nav className={styles.largeNav}>
      <ul>
        <button>
          <RiHome5Fill className={styles.sidebarIcon} size="24" />홈
        </button>
        <button>
          <BsCollectionPlay className={styles.sidebarIcon} size="24" />
          구독
        </button>
        <button>
          <MdOutlineVideoLibrary className={styles.sidebarIcon} size="24" />
          보관함
        </button>
      </ul>
      <ul>
        <button>
          <MdOutlineRestore className={styles.sidebarIcon} size="24" />
          시청기록
        </button>
        <button>
          <AiOutlinePlaySquare />내 동영상
        </button>
        <button>
          <MdOutlineQueryBuilder />
          나중에 볼 동영상
        </button>
        <button>
          <SlArrowDown />
          더보기
        </button>
      </ul>
      <ul>
        <strong>탐색</strong>
        <button>
          <HiOutlineFire />
          인기 급상승
        </button>
        <button>
          <IoMusicalNoteOutline />
          음악
        </button>
        <button>
          <BiMovie />
          영화
        </button>
        <button>
          <CiStreamOn />
          실시간
        </button>
        <button>
          <IoGameControllerOutline />
          게임
        </button>
        <button>
          <CiTrophy />
          스포츠
        </button>
        <button>
          <BsLightbulb />
          학습
        </button>
      </ul>
      <ul>
        <strong>YouTube 더보기</strong>
        <button>
          <img src="./assets/youtube.png" alt="" />
          YouTube Premium
        </button>
        <button>
          <img src="./assets/youtube_music.svg" alt="" />
          Youtube Music
        </button>
        <button>
          <img src="./assets/youtube_kids.png" alt="" />
          Youtube Kids
        </button>
        <button>
          <img src="./assets/youtube_tv.png" alt="" />
          Youtube TV
        </button>
      </ul>
      <ul>
        <button>
          <AiOutlineSetting />
          설정
        </button>
        <button>
          <BsFlag />
          신고 기록
        </button>
        <button>
          <IoHelpCircleOutline />
          고객센터
        </button>
        <button>
          <BsInfoSquare />
          의견 보내기
        </button>
      </ul>
      <div className={styles.navAnchor}>
        <div>
          <a>정보</a>
          <a>보도자료</a>
          <a>저작권</a>
          <a>문의하기</a>
          <a>크리에이터</a>
          <a>광고 개발자</a>
        </div>
        <div>
          <a>약관</a>
          <a>개인정보처리방침</a>
          <a>정책 및 안전</a>
          <a>YouTube 작동의 원리</a>
          <a>새로운 기능 테스트하기</a>
        </div>
      </div>
      <footer>
        © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료),
        yt-support-solutions-kr@google.com, 호스팅: Google LLC, <a>사업자정보</a>, <a>불법촬영물 신고</a> 크리에이터들이
        유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지
        않으며, 그에 대한 책임을 지지 않습니다.
      </footer>
    </nav>
  );
}
