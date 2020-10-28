import React from 'react';
import { render } from '@testing-library/react';
import spellListItem from './spellListItem';
import { MemoryRouter } from 'react-router-dom';

describe('spellListItem component', () => {
  it('renders spellListItem', () => {
    const { asFragment } = render(<MemoryRouter><spellListItem /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
