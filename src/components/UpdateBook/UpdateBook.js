import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../utilities/BooksAPI';

const UpdateBook = ({ bookID }) => {
  const updateBook = (bookStatus) => {
    BooksAPI.update(bookStatus, bookID);
  };

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading" onChange={event => this.updateBook(event.target.value)}>Currently Reading</option>
        <option value="wantToRead" onChange={event => this.updateBook(event.target.value)}>Want to Read</option>
        <option value="read" onChange={event => this.updateBook(event.target.value)}>Read</option>
        <option value="none" onChange={event => this.updateBook(event.target.value)}>None</option>
      </select>
    </div>
  );
};

UpdateBook.propTypes = {
  bookID: PropTypes.string
};

export default UpdateBook;
