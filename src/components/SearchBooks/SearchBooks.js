import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../../utilities/BooksAPI';
import Book from '../BookComponent/BookComponent';

import './SearchBooks.css';

class SearchBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      showingBooks: []
    };
  }

  updateQuery(query) {
    this.setState({ query });

    BooksAPI.search(query, this.state.maxResults).then((showingBooks) => {
      if (query) {
        this.setState({ showingBooks });
      } else {
        this.setState({ showingBooks: this.props.books });
      }
    });
  }

  render() {
    const { query, showingBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              debounceTimeout={300}
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { showingBooks && showingBooks.length > 0 && showingBooks.map((book, index) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array
};

export default SearchBooks;
