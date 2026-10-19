import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">EduPlatform</span>
          </div>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Главная</Link></li>
            <li><Link to="/partners" className="nav-link">Партнеры</Link></li>
            <li><Link to="/about" className="nav-link">О нас</Link></li>
            <li><Link to="/lecturers" className="nav-link">Лекторы</Link></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <a href="tel:+79991234567" className="phone-link">
            <span className="phone-icon"></span>
            <span className="phone-text">+7 (922) 8343689</span>
          </a>
        </div>
      </div>
    </header>
  );
}