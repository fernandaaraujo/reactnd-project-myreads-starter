import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../utilities/BooksAPI';

import './UpdateBook.css';

class UpdateBook extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    BooksAPI.update(this.props.book, event.target.value);
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={() => this.handleChange(this.state.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

UpdateBook.propTypes = {
  book: PropTypes.object
};

export default UpdateBook;
