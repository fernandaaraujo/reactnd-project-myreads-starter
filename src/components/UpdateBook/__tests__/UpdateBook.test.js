import React from 'react';
import { shallow, mount } from 'enzyme';
import localStorage from 'mock-local-storage';

import UpdateBook from '../UpdateBook';

global.window = {};
window.localStorage = global.localStorage;

describe('test update book component', () => {
  let props;

  beforeEach(() => {
    props = {
      book: {
        id: 'nggnmAEACAAJ',
        shelf: 'currentlyReading',
        subtitle: 'A Complete Introduction',
        title: 'The Linux Command Line'
      }
    };
  });

  it('should render books status options', () => {
    const updateBook = shallow(<UpdateBook {...props} />);
    expect(updateBook.find('.book-shelf-changer').exists()).toBe(true);
  });
});
