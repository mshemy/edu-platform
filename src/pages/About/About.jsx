import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>О платформе</h1>
      <div className="about-content">
        <p>Наша учебная платформа предоставляет высококачественные онлайн и офлайн услуги по преподаванию дисциплин для физических и юридических лиц.</p>
        <p>Мы верим, что доступ к знаниям должен быть удобным, структурированным и предоставляться лучшими специалистами в своих областях. Наша команда тщательно отбирает лекторов, проверяя их академический бэкграунд и практический опыт.</p>
        
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Ведущих лекторов</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Уникальных дисциплин</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Довольных студентов</span>
          </div>
        </div>
      </div>
    </div>
  );
}