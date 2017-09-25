import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpdateBook from '../UpdateBook/UpdateBook';

import './BookComponent.css';

const BookComponent = ({ book }) => {
  const bookImage = book.imageLinks ? book.imageLinks.thumbnail : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${bookImage})` }} />
          <UpdateBook book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <Link className="show-details" to={`/details/${book.id}`}>See details</Link>
      </div>
    </li>
  );
};

BookComponent.propTypes = {
  book: PropTypes.object
};

export default BookComponent;
