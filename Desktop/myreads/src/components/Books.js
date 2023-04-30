import PropTypes from "prop-types";

{/*
The "book" prop is an object representing a single book to be displayed. 
The "updateShelf" prop is a function that will be called when the user 
selects a new shelf for the book. */}
   
const Book = ({ book, updateShelf}) => {

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
           style={{
            width: 128,
            height: 193,
            backgroundImage:`url("${book.imageLinks && book.imageLinks.thumbnail && book.imageLinks.smallThumbnail}")`,
           }}
        ></div>
        <div className="book-shelf-changer">
          <select value={book.shelf ? book.shelf : "none"} onChange = {(event) => 
           updateShelf(book, event.target.value)}>
            <option value = "no" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
           </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          <div className="book-title">{book.subtitle}</div>
          <div className="book-title">{book.shelf ? book.shelf : 'none'}</div>
          <div className="book-title">{book.publishedDate}</div>
          <div className="book-title">{book.publisher}</div>
        </div>  
    </li>
  )
}
// Type checking a Component's Props with PropTypes.
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
}


export default Book;