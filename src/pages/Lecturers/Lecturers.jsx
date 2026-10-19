import { useState } from 'react';
import { lecturers } from '../../data/lecturersData';
import LecturerCard from '../../components/LecturerCard/LecturerCard';
import './Lecturers.css';

export default function Lecturers() {
  const [filter, setFilter] = useState('all'); // all | male | female

  const filteredLecturers = filter === 'all' 
    ? lecturers 
    : lecturers.filter(l => l.gender === filter);

  return (
    <div className="lecturers-page">
      <h1 className="page-title">Наши лекторы</h1>
      <p className="page-subtitle">
        Профессионалы с многолетним опытом, готовые поделиться знаниями
      </p>

      <div className="filter-bar">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Все ({lecturers.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'male' ? 'active' : ''}`}
          onClick={() => setFilter('male')}
        >
          Мужчины ({lecturers.filter(l => l.gender === 'male').length})
        </button>
        <button 
          className={`filter-btn ${filter === 'female' ? 'active' : ''}`}
          onClick={() => setFilter('female')}
        >
          Женщины ({lecturers.filter(l => l.gender === 'female').length})
        </button>
      </div>

      <div className="lecturers-grid">
        {filteredLecturers.map(lecturer => (
          <LecturerCard key={lecturer.id} lecturer={lecturer} />
        ))}
      </div>
    </div>
  );
}