import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import VideoDetail from './pages/VideoDetail';
// 페이지 공통적으로 들어가야 할 components 있어야 함
// ex) header, sidebar

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Outlet />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
