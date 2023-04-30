import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const Layout = ({books, updateShelf}) => {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Bookshelf title = 'Currenlty Reading' currShelf="currentlyReading" books={books} updateShelf={updateShelf} />
            <Bookshelf title='Want To Read' currShelf="wantToRead" books={books} updateShelf={updateShelf} />
            <Bookshelf title='Read' currShelf="read" books={books} updateShelf={updateShelf} />
          </div>
        </div>
        <div className='open-search'>
          <Link to ="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
}

// Type checking a Component's Props with PropTypes.
Layout.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
}

export default Layout;

    