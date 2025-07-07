import React, { useState } from 'react';

// ✅ Custom hook implementation
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

export default function App() {
  // ✅ Use the custom hook inside this component
  const [isOn, toggle] = useToggle(false);

  return (
    <button data-testid="toggle-button" onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
