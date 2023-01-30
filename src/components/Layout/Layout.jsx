import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function Layout({ children }) {
  const [menuDrop, setMenuDrop] = useState(false);
  const location = useLocation();
  const findDetailPage = location.pathname.slice(0, 6) === '/watch';
  return (
    <>
      <Header setMenuDrop={setMenuDrop} />
      <div className={`${styles.layout} ${findDetailPage ? styles.detailPage : null}`}>
        <div className={findDetailPage ? styles.sidebarNone : null}>
          <Sidebar menuDrop={menuDrop} />
        </div>
        <main className={`${styles.outlet} ${menuDrop ? styles.btnTrue : styles.btnFalse}`}>{children}</main>
      </div>
    </>
  );
}
