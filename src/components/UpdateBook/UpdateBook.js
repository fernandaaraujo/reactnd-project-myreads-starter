import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../../utilities/BooksAPI';

class UpdateBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookStatus: this.props.shelf
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      bookStatus: event.target.value
    });

    BooksAPI.update(this.props.bookID, this.state.bookStatus);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
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
  shelf: PropTypes.string,
  bookID: PropTypes.string // id
};

export default UpdateBook;
