import { Link } from 'react-router-dom';
import { lecturers } from '../../data/lecturersData';
import heroImage from '../../assets/images/lecturer-hero.png'
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import './Home.css';

export default function Home() {
    return (
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-image">
              <img 
                src={heroImage}  // <-- Используем импортированное изображение
                alt="Лектор в аудитории" 
                className="lecturer-photo"
              />
            </div>
            <div className="hero-content">
              <h1 className="hero-title">
                Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
              </h1>
              <Link to="/lecturers" className="hero-button">
                НАЙТИ ЛЕКТОРА →
              </Link>
            </div>
          </div>
        </section>



      {/* About Platform Section - с дополнительными блоками */}
      <section className="about-platform-section">
        <div className="platform-container">
          <div className="platform-header">
            <h2 className="platform-title">О платформе</h2>
          </div>
          
          <div className="platform-main-text">
            <p className="platform-description">
              Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
              с профессиональными лекторами, спикерами и тренерами.
            </p>
            <p className="platform-description">
              Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить экспертов, 
              которые не просто делятся знаниями, но и вдохновляют аудиторию.
            </p>
          </div>

          {/* Дополнительные блоки */}
          <div className="platform-features">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Индивидуальный подход</h3>
              <p className="feature-text">Подбираем лекторов под ваши задачи и аудиторию</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Проверенные эксперты</h3>
              <p className="feature-text">Все лекторы имеют подтвержденный опыт и рекомендации</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Гибкий график</h3>
              <p className="feature-text">Онлайн и офлайн форматы в удобное время</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3 className="feature-title">Для бизнеса</h3>
              <p className="feature-text">Корпоративные тренинги и специальные условия</p>
            </div>
          </div>

          {/* Статистика */}
          <div className="platform-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Профессиональных лекторов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Уникальных дисциплин</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Проведенных лекций</span>
            </div>
          </div>
        </div>
      </section>

        <PartnersSection />

      {/* Preview Lecturers */}
      <section className="preview-lecturers-section">
        <div className="preview-container">
          <h2 className="section-title">Наши лекторы</h2>
          <div className="lecturers-grid">
            {lecturers.slice(0, 4).map(lecturer => (
              <div key={lecturer.id} className="lecturer-preview-card">
                <img 
                  src={lecturer.photoUrl} 
                  alt={lecturer.name}
                  className="preview-photo"
                />
                <h3 className="preview-name">{lecturer.name}</h3>
                <p className="preview-degree">
                  {lecturer.degree !== 'нет' ? lecturer.degree : 'Практик-эксперт'}
                </p>
                <p className="preview-experience">Стаж: {lecturer.experience}</p>
                <Link to={`/lecturer/${lecturer.id}`} className="preview-link">
                  Подробнее →
                </Link>
              </div>
            ))}
          </div>
          <div className="center-button">
            <Link to="/lecturers" className="secondary-button">
              Смотреть всех лекторов
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}