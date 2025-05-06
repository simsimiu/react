import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();
  return <h2>Chi tiết người dùng: {id}</h2>;
}
