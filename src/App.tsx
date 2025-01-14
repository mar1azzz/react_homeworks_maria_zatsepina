import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import LogInPage from './pages/LogInPage/LogInPage';
import OrderPage from './pages/OrderPage/OrderPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const userLoggedIn = localStorage.getItem('userLoggedIn') === '1';
  return userLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route
              path="/order"
              element={
                <PrivateRoute>
                  <OrderPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
