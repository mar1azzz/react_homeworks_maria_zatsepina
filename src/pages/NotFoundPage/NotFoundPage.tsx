import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
        <main className="not-found-content">
        <h1>404 - Страница не найдена</h1>
        <p>К сожалению, такого маршрута не существует.</p>
        <Link to="/" className="back-home-link">
          Вернуться на главную страницу
        </Link>
        </main>
    </div>
  );
};

export default NotFoundPage;
