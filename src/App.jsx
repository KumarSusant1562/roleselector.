import { Routes, Route } from 'react-router-dom';
import RoleSelector from './components/RoleSelector';
import LoginForm from './components/LoginForm';
import StudentPage from './components/StudentPage';
import CoachPage from './components/CoachPage';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelector />} />
      <Route path="/login/:role" element={<LoginForm />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/coach" element={<CoachPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
