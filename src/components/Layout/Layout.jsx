import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {/* Outlet автоматически подставит сюда компонент текущей страницы */}
        <Outlet /> 
      </main>
    </div>
  );
}