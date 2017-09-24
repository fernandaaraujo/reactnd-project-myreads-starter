import React from 'react';
import { shallow } from 'enzyme';
import localStorage from 'mock-local-storage';

import ListBooks from '../ListBooks';

global.window = {};
window.localStorage = global.localStorage;

describe('test list books component', () => {
  let props;
  let listBooks;

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
          title: 'The Linux Command Line 2'
        }
      ]
    };

    listBooks = shallow(<ListBooks {...props} />);
  });

  it('should render list books', () => {
    expect(listBooks.find('.list-books').exists()).toBe(true);
  });

  it('should render list books title', () => {
    expect(listBooks.find('.list-books-title h1').text()).toBe('MyReads');
  });

  it('should render three books sections', () => {
    expect(listBooks.find('BookSection').length).toBe(3);
  });
});
