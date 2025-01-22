import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
