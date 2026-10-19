import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Lecturers from './pages/Lecturers/Lecturers';
import LecturerDetail from './pages/LecturerDetail/LecturerDetail';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/lecturers" element={<Lecturers />} />
            {/* Динамический маршрут для детальной страницы */}
            <Route path="/lecturer/:id" element={<LecturerDetail />} />
          </Routes>
        </main>
        {/* Здесь позже добавим Footer */}
      </div>
    </Router>
  );
}

export default App;