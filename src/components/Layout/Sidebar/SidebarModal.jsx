import React, { useEffect, useRef } from 'react';
import styles from './Sidebar.module.scss';

// Components
import SidebarLarge from './SidebarLarge';
import HeaderMenu from '../Header/HeaderMenu';

export default function SidebarModal({ modal, setModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const clickDocument = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', clickDocument);
    document.addEventListener('touchstart', clickDocument); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', clickDocument);
      document.removeEventListener('touchstart', clickDocument); // 모바일 대응
    };
  });

  return (
    <nav className={modal ? `${styles.modalNav} ${styles.open}` : styles.modalNav} ref={modalRef}>
      <HeaderMenu setModal={setModal} menuBtn={'openModal'} />
      <SidebarLarge />
    </nav>
  );
}
