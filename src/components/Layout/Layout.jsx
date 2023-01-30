import React, { useState } from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function Layout({ children }) {
  const [menuDrop, setMenuDrop] = useState(false);
  return (
    <>
      <Header setMenuDrop={setMenuDrop} />
      <div className={styles.layout}>
        <Sidebar menuDrop={menuDrop} />
        <main className={menuDrop ? styles.btnTrue : styles.btnFalse}>{children}</main>
      </div>
    </>
  );
}
