import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
        return (
         <li className="list-group-item"
             onClick={() => this.props.selectBook(book)}
             key={book.title}>
             {book.title}
         </li>
       );
       });
    }

    render() {
        return (
          <ul className="list-group">
              {this.renderList()}
          </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

function mapStateToProps(state) {
    return {
        books : state.books,
        book : state.selectbook
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


