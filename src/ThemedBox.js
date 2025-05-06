import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    padding: '20px',
    margin: '10px 0',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <div style={styles}>
      Chủ đề hiện tại: {theme}
      <br />
      <button onClick={toggleTheme}>Chuyển chủ đề</button>
    </div>
  );
}

export default ThemedBox;
