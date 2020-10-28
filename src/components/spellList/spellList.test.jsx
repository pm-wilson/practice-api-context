import React from 'react';
import { render } from '@testing-library/react';
import spellList from './spellList';
import { MemoryRouter } from 'react-router-dom';

describe('spellList component', () => {
  it('renders spellList', () => {
    const { asFragment } = render(<MemoryRouter><spellList /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
