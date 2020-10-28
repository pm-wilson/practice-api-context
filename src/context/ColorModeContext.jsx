import React, { useState } from 'react';

export const ColorModeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ColorModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);

  const toggle = () => {
    setLightMode(oldType => {
      if(oldType === true) return false;
      return true;
    });
  };

  const bucket = {
    lightMode,
    toggle,
  };
  
  return (
    <ColorModeContext.Provider value={bucket}>
      {children}
    </ColorModeContext.Provider>
  );
};

