import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookSection from '../BookSection/BookSection';

import './ListBooks.css';

const ListBooks = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookSection books={books} updateBook={updateBook} status="currentlyReading" titleSection="Currently Reading" />
          <BookSection books={books} updateBook={updateBook} status="wantToRead" titleSection="Want to Read" />
          <BookSection books={books} updateBook={updateBook} status="read" titleSection="Read" />
        </div>
      </div>
      <Link
        to="/search"
        className="open-search">Add a book</Link>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array,
  updateBook: PropTypes.func
};

export default ListBooks;
