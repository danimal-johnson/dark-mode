import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState( () => {
    // Get from local storage by key, if it exists, to set the initial value
    const item = window.localStorage.getItem(key); // Built-in fn()
    if (item) {
      JSON.parse(item);
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  // Setter
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}