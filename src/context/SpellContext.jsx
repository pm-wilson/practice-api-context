import React, { useState } from 'react';

export const SpellContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const SpellProvider = ({ children }) => {
  const [spellIndex, setSpellIndex] = useState('');
  const [spellLevel, setSpellLevel] = useState('0');

  const handleChange = ({ target }) => {
    if(target.name === 'spellIndex') setSpellIndex(target.value);
    if(target.name === 'spellLevel') setSpellLevel(target.value);
  };

  const bucket = {
    spellIndex,
    spellLevel,
    handleChange,
  };

  return (
    <SpellContext.Provider value={bucket}>
      {children}
    </SpellContext.Provider>
  );
};
