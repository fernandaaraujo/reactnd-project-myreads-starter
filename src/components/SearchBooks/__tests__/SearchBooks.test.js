import React from 'react';
import { shallow } from 'enzyme';
import localStorage from 'mock-local-storage';

import SearchBooks from '../SearchBooks';

global.window = {};
window.localStorage = global.localStorage;

describe('test search books component', () => {
  let props;
  let searchBooks;

  beforeEach(() => {
    props = {
      books: [
        {
          id: 'nggnmAEACAAJ',
          shelf: 'currentlyReading',
          subtitle: 'A Complete Introduction',
          title: 'The Linux Command Line'
        }, {
          id: 'pggnmAEACAAJ',
          shelf: 'wantToRead',
          subtitle: 'A Complete Introduction 2',
          title: 'Android Basics'
        }
      ]
    };

    searchBooks = shallow(<SearchBooks {...props} />);
  });

  it('should render search bar', () => {
    expect(searchBooks.find('.search-books').exists()).toBe(true);
  });
});
