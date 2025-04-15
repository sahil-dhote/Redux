// ThemeComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

function ThemeComponent() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <h2>Theme Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}

export default ThemeComponent;
