import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/admin');
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
