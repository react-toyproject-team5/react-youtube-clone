import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// 페이지 공통적으로 들어가야 할 components 있어야 함
// ex) header, sidebar

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
