import React from 'react';
import { shallow, mount } from 'enzyme';
import localStorage from 'mock-local-storage';

import BookSection from '../BookSection';

global.window = {};
window.localStorage = global.localStorage;

describe('test book section component', () => {
  const props = {
    books: [{
      id: 'nggnmAEACAAJ',
      shelf: 'currentlyReading',
      subtitle: 'A Complete Introduction',
      title: 'The Linux Command Line'
    }, {
      id: 'pggnmAEACAAJ',
      shelf: 'wantToRead',
      subtitle: 'A Complete Introduction 2',
      title: 'The Linux Command Line 2'
    }],
    status: 'wantToRead',
    titleSection: 'Want To Read'
  };

  const updateBook = shallow(<BookSection {...props} />);

  it('should render book section for Want to Read books', () => {
    expect(updateBook.find('.bookshelf').exists()).toBe(true);
  });

  it('should render book section title', () => {
    expect(updateBook.find('.bookshelf-title').text()).toBe('Want To Read');
  });

  it('should render only wantToRead books', () => {
    expect(updateBook.find('BookComponent').length).toBe(1);
  });
});
