import React, { useEffect, useRef } from 'react';
import styles from './Sidebar.module.scss';
import SidebarLarge from './SidebarLarge';
import HeaderLogo from '../Header/headerLeftLogomenu';

export default function SidebarModal({ setModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <div ref={modalRef}>
      <nav className={styles.modalNav}>
        <HeaderLogo />
        <SidebarLarge />
      </nav>
    </div>
  );
}
