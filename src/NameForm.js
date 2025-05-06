import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    alert(`Xin chào, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Hiển thị</button>
    </form>
  );
}

export default NameForm;
