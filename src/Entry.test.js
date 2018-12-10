import React from 'react';
import { shallow } from 'enzyme';
import Entry from './Entry';

describe('Entry', () => {
  const entry = shallow(<Entry />);

  it('renders properly', () => {
    expect(entry).toMatchSnapshot();
  })

  it('initializes state with checked set to false', () => {
    expect(entry.state().checked).toEqual(false);
  })
})