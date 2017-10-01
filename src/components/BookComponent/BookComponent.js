import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpdateBook from '../UpdateBook/UpdateBook';

import './BookComponent.css';

const BookComponent = ({ book, updateBook }) => {
  const bookImage = book.imageLinks ? book.imageLinks.thumbnail : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${bookImage})` }} />
          <UpdateBook book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <Link className="show-details" to={`/details/${book.id}`}>See details</Link>
      </div>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func
};

export default BookComponent;
