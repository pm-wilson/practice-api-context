import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../spellList/spellList';
import DetailPage from '../spellDetails/spellDetails';
import Header from '../header/header';
import { SpellProvider } from '../../context/SpellContext';

export default function App() {
  return (
    <SpellProvider>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={ListPage}
          />
          <Route
            path="/details/:name"
            exact
            component={DetailPage}
          />
        </Switch>
      </Router>
    </SpellProvider>
  );
}
