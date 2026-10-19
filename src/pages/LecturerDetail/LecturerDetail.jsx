import { useParams, Link } from 'react-router-dom';
import { lecturers } from '../../data/lecturersData';
import { useState } from 'react';
import './LecturerDetail.css';

export default function LecturerDetail() {
  const { id } = useParams();
  const lecturer = lecturers.find(l => l.id === Number(id));
  
  // Состояние для аккордеона: храним индекс открытой дисциплины (null = все закрыты)
  const [openSubjectIndex, setOpenSubjectIndex] = useState(null);

  const toggleSubject = (index) => {
    setOpenSubjectIndex(openSubjectIndex === index ? null : index);
  };

  if (!lecturer) {
    return (
      <div className="not-found">
        <h2>Лектор не найден</h2>
        <Link to="/lecturers" style={{ color: 'var(--accent-color)', marginTop: '10px', display: 'inline-block' }}>
          ← Вернуться к списку лекторов
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/lecturers" style={{ color: '#666', marginBottom: '20px', display: 'inline-block' }}>
        ← Назад к списку
      </Link>

      <div className="detail-header">
        <img src={lecturer.photoUrl} alt={lecturer.name} className="detail-photo" />
        <div className="detail-info">
          <h1>{lecturer.name}</h1>
          <div className="detail-meta">
            <p><strong>Образование:</strong> {lecturer.education}</p>
            <p><strong>Стаж:</strong> {lecturer.experience}</p>
            <p><strong>Учёная степень:</strong> {lecturer.degree !== 'нет' ? lecturer.degree : 'Не присвоена'}</p>
          </div>
        </div>
      </div>

      <div className="subjects-section">
        <h2>Преподаваемые дисциплины</h2>
        {lecturer.subjects.map((subject, index) => (
          <div className="accordion-item" key={index}>
            <button className="accordion-header" onClick={() => toggleSubject(index)}>
              {subject.title}
              <span>{openSubjectIndex === index ? '−' : '+'}</span>
            </button>
            {openSubjectIndex === index && (
              <div className="accordion-content">
                <p>{subject.description}</p>
                <ul>
                  {subject.topics.map((topic, topicIdx) => (
                    <li key={topicIdx}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="tariffs-section">
        <h2>Тарифы</h2>
        <div className="tariffs-grid">
          {lecturer.tariffs.map((tariff, index) => (
            <div className="tariff-card" key={index}>
              <div className="tariff-name">{tariff.name}</div>
              <div className="tariff-price">{tariff.price}</div>
              <button className="tariff-btn">Записаться</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}