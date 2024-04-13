import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import MovieCollectionPage from './pages/MovieDetail/MovieCollectionDetailPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

// 1. 홈페이지
// 2. 영화 전체 보여주는 페이지(검색)
// 3. 영화 디테일 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/movies">
          <Route index element={<MoviePage />} />
          <Route path=":movieId" element={<MovieDetailPage />} />
          <Route path=":movieId/:collectionId" element={<MovieCollectionPage />} />
        </Route>
        {/* <Route path="/movies" element={<MoviePage />}/>
        <Route path="/movies:movieId" element={<MovieDetailPage />} /> */}
      </Route>
      {/* 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
