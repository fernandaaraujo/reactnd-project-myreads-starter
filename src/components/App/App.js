import React from 'react';
import * as BooksAPI from '../../utilities/BooksAPI';
import ListBooks from '../ListBooks/ListBooks';
import Book from '../BookComponent/BookComponent';

import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      books: [],
      showingBooks: [],
      showSearchPage: true,
      maxResults: 20
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books, showingBooks: books });
    });
  }

  updateQuery(query) {
    this.setState({ query });

    BooksAPI.search(query, this.state.maxResults).then((showingBooks) => {
      if (query) {
        this.setState({ showingBooks });
      } else {
        this.setState({ showingBooks: this.state.books });
      }
    });
  }

  render() {
    const { query, showingBooks } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input
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
        ) : (
          this.state.books.length > 0 && <ListBooks books={this.state.books} />
        )}
      </div>
    );
  }
}

export default BooksApp;
