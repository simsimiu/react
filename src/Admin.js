import React from 'react';
import { useAuth } from './AuthContext';

export default function Admin() {
  const { logout } = useAuth();
  return (
    <div>
      <h2>Trang Admin (Chỉ khi đăng nhập)</h2>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}
