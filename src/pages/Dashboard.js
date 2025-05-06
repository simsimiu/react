import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Stats from './dashboard/Stats';
import Profile from './dashboard/Profile';
import Settings from './dashboard/Settings';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Thống kê</Link> | 
        <Link to="profile">Hồ sơ</Link> | 
        <Link to="settings">Cài đặt</Link>
      </nav>

      <Routes>
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
