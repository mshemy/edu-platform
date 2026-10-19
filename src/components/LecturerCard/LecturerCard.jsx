import { Link } from 'react-router-dom';
import './LecturerCard.css';

export default function LecturerCard({ lecturer }) {
  const previewSubjects = lecturer.subjects.slice(0, 2);

  return (
    <div className="lecturer-card">
      <img 
        src={lecturer.photoUrl} 
        alt={lecturer.name} 
        className="card-photo"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x280?text=Фото';
        }}
      />
      <div className="card-body">
        <h3 className="card-name">{lecturer.name}</h3>
        <p className="card-degree">{lecturer.degree !== 'нет' ? lecturer.degree : 'Без учёной степени'}</p>
        <p className="card-experience">Стаж: {lecturer.experience}</p>
        
        <div className="card-rating">
          <span className="stars">★ {lecturer.rating}</span>
          <span className="reviews-count">({lecturer.reviewsCount} отзывов)</span>
        </div>

        <div className="card-subjects">
          <div className="card-subjects-title">Дисциплины:</div>
          <ul>
            {previewSubjects.map((subj, idx) => (
              <li key={idx}>• {subj.title}</li>
            ))}
          </ul>
        </div>

        <Link to={`/lecturer/${lecturer.id}`} className="card-btn">
          Подробнее
        </Link>
      </div>
    </div>
  );
}