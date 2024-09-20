import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Apply the CSS styles based on the current theme
    if (theme) {
      applyThemeStyles(theme);
    } else {
      applyThemeStyles('black');
    }
  }, [theme]);

  const applyThemeStyles = (theme) => {
    const tableHeaders = document.querySelectorAll('.table-header th');
    const tableBorders = document.querySelectorAll('.table-bordered, .table-bordered td');
    const lines = document.querySelectorAll('.line');

    const styles = {
      black: { backgroundColor: '#000000', color: 'white', borderColor: '#000000' },
      green: { backgroundColor: '#00ff00', color: 'white', borderColor: '#00ff00' },
      blue: { backgroundColor: '#0000ff', color: 'white', borderColor: '#0000ff' },
      pink: { backgroundColor: '#ff69b4', color: 'white', borderColor: '#ff69b4' },
      maroon: { backgroundColor: '#800000', color: 'white', borderColor: '#800000' },
    };

    const themeStyles = styles[theme] || styles.black;

    tableHeaders.forEach(th => {
      th.style.backgroundColor = themeStyles.backgroundColor;
      th.style.color = themeStyles.color;
    });

    tableBorders.forEach(element => {
      element.style.borderColor = themeStyles.borderColor;
    });

    lines.forEach(line => {
      line.style.borderColor = themeStyles.borderColor;
    });
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="theme-selector" style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor="theme" style={{ marginRight: '10px' }}>Choose Theme: </label>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <button
          style={{
            backgroundColor: 'black',
            width: '20px',
            height: '20px',
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
                fontSize: '10px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      </div>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <button
          style={{
            backgroundColor: 'green',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('green')}
        >
          {theme === 'green' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '10px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      </div>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <button
          style={{
            backgroundColor: 'blue',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('blue')}
        >
          {theme === 'blue' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '10px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      </div>
      <div style={{ position: 'relative', marginRight: '10px' }}>
        <button
          style={{
            backgroundColor: 'pink',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('pink')}
        >
          {theme === 'pink' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '10px',
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
            backgroundColor: 'maroon',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => handleThemeChange('maroon')}
        >
          {theme === 'maroon' && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '10px',
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