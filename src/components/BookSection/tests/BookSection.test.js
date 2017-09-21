import React from 'react';
import { shallow, mount } from 'enzyme';
import BookSection from '../BookSection';

describe('test book section component', () => {
  const props = {
    books: [{
      bookID: 'nggnmAEACAAJ',
      shelf: 'currentlyReading',
      subtitle: 'A Complete Introduction',
      title: 'The Linux Command Line'
    }, {
      bookID: 'pggnmAEACAAJ',
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
    expect(updateBook.find('.bookshelf').text()).toBe('Want To Read');
  });

  it('should render only wantToRead books', () => {
    expect(updateBook.find('Book').length).toBe(1);
  });
});
