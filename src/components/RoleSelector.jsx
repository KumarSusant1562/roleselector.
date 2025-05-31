import { useNavigate } from 'react-router-dom';
import './styles.css';

function RoleSelector() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/login/${role}`);
  };

  return (
    <div className="container">
      <h2>Select your role</h2>
      <button onClick={() => handleSelect('student')}>Student</button>
      <button onClick={() => handleSelect('coach')}>Coach</button>
      <button onClick={() => handleSelect('admin')}>Admin</button>
    </div>
  );
}

export default RoleSelector;
