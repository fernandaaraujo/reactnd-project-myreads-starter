import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpdateBook from '../UpdateBook/UpdateBook';
import * as BooksAPI from '../../utilities/BooksAPI';

import './BookDetails.css';

class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookID: this.props.location.pathname.split('/details/')[1],
      book: {}
    };
  }

  componentDidMount() {
    BooksAPI.get(this.state.bookID).then((book) => {
      this.setState({ book });
    });
  }

  render() {
    const { book } = this.state;
    const bookImage = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
      <section className="book-details-container">
        <Link className="close-details" to="/">Close</Link>
        <div className="book-details">
          <div className="list-books-title">
            <h1>{book.title}</h1>
          </div>
          <div className="book-data">
            <div className="book-container">
              <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: `url(${bookImage})` }} />
                <UpdateBook book={book} />
              </div>
            </div>
            <h3 className="book-subtitle">{book.subtitle}</h3>
            <p className="book-authors">{book.authors}</p>
            <p className="book-description">{book.description}</p>
            <a className="book-preview" href={book.previewLink}>Preview</a>
          </div>
        </div>
      </section>
    );
  }
}

BookDetails.propTypes = {
  location: PropTypes.object
};

export default BookDetails;
