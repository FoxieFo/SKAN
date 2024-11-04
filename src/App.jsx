import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ResultPage from './pages/ResultPage/ResultPage';
import TokenNav from './store/TokenNav';

function App() {
  return (
    <Router>
      <TokenNav/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
