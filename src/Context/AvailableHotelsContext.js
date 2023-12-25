import React, { createContext, useState } from 'react';

export const AvailableHotelsContext = createContext({
  available: '',
  setAvailable: () => {},
});

export const AvailableHotelsContextProvider = ({ children }) => {
  const [available, setAvailable] = useState('');

  return (
    <AvailableHotelsContext.Provider value={{ available, setAvailable }}>
      {children}
    </AvailableHotelsContext.Provider>
  );
};
