import React from 'react';
import { render } from '@testing-library/react';
import spellDetails from './spellDetails';
import { MemoryRouter } from 'react-router-dom';

describe('spellDetails component', () => {
  it('renders spellDetails', () => {
    const { asFragment } = render(<MemoryRouter><spellDetails /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
