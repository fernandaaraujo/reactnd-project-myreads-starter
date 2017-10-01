import React from 'react';
import PropTypes from 'prop-types';
import Book from '../BookComponent/BookComponent';

import './BookSection.css';

const BookSection = (props) => {
  const { books, status, titleSection, updateBook } = props;
  const currentlyBooks = books.filter(book => book.shelf === status);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titleSection}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { currentlyBooks.map((book, index) => (
            <Book key={book.id} book={book} updateBook={updateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookSection.propTypes = {
  books: PropTypes.array,
  status: PropTypes.string,
  titleSection: PropTypes.string,
  updateBook: PropTypes.func
};

export default BookSection;
