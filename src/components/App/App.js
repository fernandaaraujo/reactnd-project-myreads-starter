import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../../utilities/BooksAPI';
import ListBooks from '../ListBooks/ListBooks';
import SearchBooks from '../SearchBooks/SearchBooks';
import BookDetails from '../BookDetails/BookDetails';

import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      maxResults: 20
    };
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  updateBook = (book, event) => {
    BooksAPI.update(book, event.target.value);

    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )} />
        <Route path="/details/:id" component={BookDetails} />
      </div>
    );
  }
}

export default BooksApp;
