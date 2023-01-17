import React from 'react';
import './HeaderTest.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function HeaderTest() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <main>메인 페이지22</main>
    </div>
  );
}
