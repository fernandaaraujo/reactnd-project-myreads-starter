import React from 'react';
import PropTypes from 'prop-types';

import './UpdateBook.css';

const UpdateBook = ({ book, updateBook }) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={event => updateBook(book, event)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

UpdateBook.propTypes = {
  book: PropTypes.object,
  updateBook: PropTypes.func
};

export default UpdateBook;
