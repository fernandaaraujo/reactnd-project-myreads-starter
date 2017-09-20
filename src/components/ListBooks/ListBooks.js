import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpdateBook from '../UpdateBook/UpdateBook';

import './ListBooks.css';

class ListBooks extends Component {
  render() {
    const { books, status, titleSection } = this.props;
    const currentlyBooks = books.filter(book => book.shelf === status);

    console.log(books[0].imageLinks.thumbnail);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{titleSection}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { currentlyBooks.map((book, index) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                    <UpdateBook bookID={book.id} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

ListBooks.propTypes = {
  books: PropTypes.array,
  status: PropTypes.string,
  titleSection: PropTypes.string
};

export default ListBooks;
