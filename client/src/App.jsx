import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import BirthdayPage from './pages/BirthdayPage';
import BirthdayFormPage from './pages/BirthdayFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { BirthdayProvider } from './context/BirthdayContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <BirthdayProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/birthdays" element={<BirthdayPage />} />
              <Route path="/add-birthday" element={<BirthdayFormPage />} />
              <Route path="/birthdays/:id" element={<BirthdayFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BirthdayProvider>
    </AuthProvider>
  )
}

export default App;