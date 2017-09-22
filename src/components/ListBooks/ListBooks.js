import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookSection from '../BookSection/BookSection';

import './ListBooks.css';

class ListBooks extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookSection books={books} status="currentlyReading" titleSection="Currently Reading" />
            <BookSection books={books} status="wantToRead" titleSection="Want to Read" />
            <BookSection books={books} status="read" titleSection="Read" />
          </div>
        </div>
        <Link
          to="/search"
          className="open-search">Add a book</Link>
      </div>
    );
  }
}

ListBooks.propTypes = {
  books: PropTypes.array
};

export default ListBooks;
