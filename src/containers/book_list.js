import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookSelected from './../actions/action_book_selected';

class BookList extends Component {
  getBookListItem() {
    console.log(BookSelected);
    return this.props.books.map( book => <li key={book.title} onClick={() => this.props.BookSelected(book)}>{book.title} </li>);
  }
  render() {
    console.log('rendering list');
    return (
      <ul className="list-group col-md-4">
        {this.getBookListItem()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ BookSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

