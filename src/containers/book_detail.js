import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div></div>;
        }
        return (
          <div>
              {this.props.book.title}
          </div>
        );
    }
}

function mapPropsToState(state) {
    return {
        book: state.selectbook
    }
}

export default connect(mapPropsToState)(BookDetail);


