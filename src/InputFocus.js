import React, { useRef } from 'react';

//Nút bấm để focus vào ô input (useRef)
function InputFocus() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập gì đó..." />
      <button onClick={handleFocus}>Focus vào ô nhập</button>
    </div>
  );
}

export default InputFocus;