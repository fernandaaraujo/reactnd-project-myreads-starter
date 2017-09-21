import React from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from '../../utilities/BooksAPI';
import ListBooks from '../ListBooks/ListBooks';
import UpdateBook from '../UpdateBook/UpdateBook';

import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    const maxResults = 3;

    this.state = {
      query: '',
      books: [],
      showSearchPage: true
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateQuery(query) {
    BooksAPI.search(query, this.maxResults).then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const { query, books } = this.state;

    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={event => this.updateQuery(event.target.value)} />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              { this.state.books.map((book, index) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                      <UpdateBook bookID={book.id} shelf={status} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
