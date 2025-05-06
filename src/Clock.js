import React, { useState, useEffect } from 'react';

//Hiển thị giờ hiện tại, tự cập nhật mỗi giây
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Clear timer khi unmount
  }, []);

  return <h2>Giờ hiện tại: {time}</h2>;
}

export default Clock;