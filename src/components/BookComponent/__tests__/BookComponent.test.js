import React from 'react';
import { shallow } from 'enzyme';
import localStorage from 'mock-local-storage';

import BookComponent from '../BookComponent';

global.window = {};
window.localStorage = global.localStorage;

describe('test book component', () => {
  let props;
  let bookComponent;

  beforeEach(() => {
    props = {
      book: {
        id: 'nggnmAEACAAJ',
        shelf: 'currentlyReading',
        subtitle: 'A Complete Introduction',
        title: 'The Linux Command Line',
        authors: 'Some author',
        imageLinks: {
          thumbnail: 'someImage.png'
        }
      }
    };

    bookComponent = shallow(<BookComponent {...props} />);
  });

  it('should render a book', () => {
    expect(bookComponent.find('.book').exists()).toBe(true);
  });

  it('should render update book component', () => {
    expect(bookComponent.find('UpdateBook').length).toBe(1);
  });

  it('should render book title', () => {
    expect(bookComponent.find('.book-title').text()).toBe('The Linux Command Line');
  });

  it('should render book authors', () => {
    expect(bookComponent.find('.book-authors').text()).toBe('Some author');
  });
});
