import React from 'react';
import { shallow } from 'enzyme';
import ListBooks from '../../ListBooks/ListBooks';

describe('test list books component', () => {
  const props = [
    {
      bookID: 'nggnmAEACAAJ',
      shelf: 'currentlyReading',
      subtitle: 'A Complete Introduction',
      title: 'The Linux Command Line'
    }, {
      bookID: 'pggnmAEACAAJ',
      shelf: 'wantToRead',
      subtitle: 'A Complete Introduction 2',
      title: 'The Linux Command Line 2'
    }];

  const listBooks = shallow(<ListBooks {...props} />);
  console.log(listBooks.debug());

  it('should render list books', () => {
    expect(listBooks.find('.list-books').exists()).toBe(true);
  });

  it('should render list books title', () => {
    expect(listBooks.find('.list-books-title h1').text()).toBe('MyReads');
  });

  it('should render three books sections', () => {
    expect(listBooks.find('.list-books-content').length).toBe(3);
  });
});
