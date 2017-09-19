import React from 'react';
import { shallow, mount } from 'enzyme';
import UpdateBook from '../UpdateBook';

describe('test update book component', () => {
  const props = {
    bookID: 'nggnmAEACAAJ',
    shelf: 'currentlyReading',
    subtitle: 'A Complete Introduction',
    title: 'The Linux Command Line'
  };

  it('should render books status options', () => {
    const updateBook = shallow(<UpdateBook {...props} />);
    expect(updateBook.find('.book-shelf-changer').exists()).toBe(true);
  });

  it('shoudl update book status from wantToRead to currentlyReading', () => {
    const updateBook = mount(<UpdateBook {...props} />);
    updateBook.find('select').simulate('change', { target: { value: 'wantToRead' } });
    expect(updateBook.find('select').props().value).toBe("wantToRead");
  });
});
