import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';

function LoginForm() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (id === `${role}123` && password === 'pass') {
      navigate(`/${role}`);
    } else {
      alert('Invalid ID or Password');
    }
  };

  return (
    <div className="container">
      <h2>{role.toUpperCase()} Login</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
