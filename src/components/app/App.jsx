import React from 'react';
import ListPage from '../spellList/spellList';
import Header from '../header/header';
import { ColorModeProvider } from '../../context/ColorModeContext';
import styles from '../../components/styles.css';

export default function App() {

  return (
    <ColorModeProvider>
      <Header />
      <ListPage />
    </ColorModeProvider>
  );
}
