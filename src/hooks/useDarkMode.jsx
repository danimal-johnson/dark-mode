// import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [darkness, setDarkness] = useLocalStorage('darkmode', initialValue);

  const element = document.getElementById("App");
  console.log ("element =", element);
  if (element) {
    if (darkness === true) {
      console.log("removing");
      element.classList.remove("dark-mode");
    }
    if (darkness === false) {
      console.log("adding");
      element.classList.add("dark-mode");
    }
  }
  return [darkness, setDarkness];
}