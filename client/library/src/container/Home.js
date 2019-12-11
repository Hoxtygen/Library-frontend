import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import BookList from '../component/BookList'
import { fetchBooks } from '../actions/actionCreators/fetchBooksActionCreator';
import Loaders from '../component/Loader';

class Home extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }
    render() {
        const books = this.props.allBooks.data || [];
        if (this.props.loading) {
            console.log('loading....');
            return <Loaders />
        }
        return this.props.error ? (<p>{this.props.error}</p>) :
        (
            <Fragment>
                <BookList books = {books} />
            </Fragment>
        )
    }
}



function mapStateToProps(state){
   return {
    allBooks: state.booksReducer.bookList.allBooks,
    loading: state.booksReducer.bookList.loading,
    error: state.booksReducer.bookList.loading
   }
}


export default connect(mapStateToProps, { fetchBooks })(Home)
