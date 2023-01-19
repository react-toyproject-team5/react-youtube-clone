import './App.css';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Comment from './components/Comments/Comments';
import RelatedVideoInVideoDetail from './components/RelatedVideoInVideoDetail/RelatedVideoInVideoDetail';
// 페이지 공통적으로 들어가야 할 components 있어야 함
// ex) header, sidebar

const queryClient = new QueryClient();

function App() {
  // 페이지별 사이드바
  let location = useLocation();
  // 반응형 사이드바
  const [menuDrop, setMenuDrop] = useState(false);
  const [menuSlide, setMenuSlide] = useState(false);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header menuDrop={menuDrop} setMenuDrop={setMenuDrop} menuSlide={menuSlide} setMenuSlide={setMenuSlide} />
        <div style={{ display: 'flex' }}>
          {location.pathname === '/watch/:videoId' ? null : <Sidebar menuDrop={menuDrop} menuSlide={menuSlide} />}
          {/* <div className="VideoDetail">
            <Comment />
            <RelatedVideoInVideoDetail />
          </div> */}
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
