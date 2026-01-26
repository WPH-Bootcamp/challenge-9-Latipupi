import { Routes, Route, useLocation } from 'react-router-dom';
import { Pages } from './pages/Pages';
import { LoginForm } from './features/auth/components/LoginForm';
import { RestoDetail } from './features/resto-detail/RestoDetail';
import Navbar from './components/shared/navbar/Navbar';
import Footer from './components/shared/footer/Footer';

function App() {
  const location = useLocation();

  // Daftar path yang tidak ingin menampilkan Navbar
  const showNavbar = location.pathname !== '/login';
  return (
    <>
        {showNavbar && <Navbar />}
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Pages />} />

          <Route path="/login" element={<LoginForm />} />
          
          <Route path="/resto/:id" element={<RestoDetail />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;