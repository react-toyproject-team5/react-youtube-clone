import './App.css';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 페이지 공통적으로 들어가야 할 components 있어야 함
// ex) header, sidebar

const queryClient = new QueryClient();

function App() {
  let location = useLocation();
  console.log(location.pathname);
  const [menuDrop, setMenuDrop] = useState(false);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header menuDrop={menuDrop} setMenuDrop={setMenuDrop} />
        <div style={{ display: 'flex' }}>
          {location.pathname === '/watch/:videoId' ? null : <Sidebar menuDrop={menuDrop} />}
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
