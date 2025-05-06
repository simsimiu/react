import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Lỗi khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const newUser = await res.json();
      setUsers(prev => [...prev, { ...newUser, id: Date.now() }]);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setError('Lỗi khi tạo người dùng');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
      });
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      setError('Lỗi khi xóa người dùng');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>

      {loading && <p>Đang xử lý...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleCreate} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Tên"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <button type="submit">Thêm</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) 
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: 10 }}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
