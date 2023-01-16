import './App.css';
import { Outlet } from 'react-router-dom';

// 페이지 공통적으로 들어가야 할 components 있어야 함
// ex) header, sidebar

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
