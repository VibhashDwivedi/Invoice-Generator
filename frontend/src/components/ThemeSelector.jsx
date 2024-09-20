import React, { useState } from 'react';
import '../css/black.css'; // Default theme

const ThemeSelector = () => {
  const [theme, setTheme] = useState('black');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);

    if (selectedTheme === 'black') {
      import('../css/black.css');
    } else if (selectedTheme === 'red') {
      import('../css/red.css');
    }
  };

  return (
    <div className="theme-selector" style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor="theme" style={{ marginRight: '10px' }}>Choose Theme: </label>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <button
          style={{
            backgroundColor: 'black',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('black')}
        >
          {theme === 'black' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '20px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      </div>
      <div style={{ position: 'relative' }}>
        <button
          style={{
            backgroundColor: 'red',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('red')}
        >
          {theme === 'red' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '20px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;