import React from 'react';
import ListPage from '../spellList/spellList';
import Header from '../header/header';
import { ColorModeProvider } from '../../context/ColorModeContext';

export default function App() {

  return (
    <ColorModeProvider>
      <Header />
      <ListPage />
    </ColorModeProvider>
  );
}
