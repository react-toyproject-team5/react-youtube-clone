import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';

//라우터 구조
//<App>
//	/ 👉 <Videos>
//	/watch 👉 <Videos>
//	/watch/id 👉 <VideoDetail></VideoDetail> : 비디오 상세페이지
//  /results 👉 <Videos>
//	/results/query 👉 <Videos> : 검색페이지
// /test 👉 <HeaderTest> : 헤더 test 페이지

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'watch', element: <Videos /> },
      { path: 'watch/:videoId', element: <VideoDetail /> },
      { path: 'results', element: <Videos /> },
      { path: 'results/:keyword', element: <Videos /> },
    ],
  },
]);

export default router;
