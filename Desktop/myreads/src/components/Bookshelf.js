import Book from './Books';
import PropTypes from 'prop-types';

{/* Creating a BookShelf component and it takes in four props
  The "title" prop is the title of the bookshelf section. 
  The "books" prop is an array of objects representing the books to be displayed. 
  The "currShelf" prop is a string indicating the current shelf that is being displayed. 
  The "updateShelf" prop is a function that will be called when a book is moved to a different shelf. */}
const Bookshelf = ({title, books, currShelf, updateShelf}) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>

          {/*Using the filter method to create a new array of books that belong 
          to the current shelf being displayed, and then maps over the new array to 
          render a list of books on the shelf using the "Book" component*/}

          {books.filter((book) => book.shelf === currShelf).map((book)=>(
          <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  )
}
// Type checking a Component's Props with PropTypes.
Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  currShelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
}
export default Bookshelf;