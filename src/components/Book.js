import React from 'react';
import '../style/book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookByThunk } from '../redux/books/booksSlice';
import CircularProgress from './CircularProgressbar';

function Book({ book }) {
  const dispatch = useDispatch();
  const chapterCurrent = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3: A Lesson Learned', 'Chapter 4', 'Chapter 7', 'Chapter 17'];

  return (
    <div className="book-card">
      <div className="book-detail">
        <h5>{book.category}</h5>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <div className="btn-panel">
          <button className="comment-btn" type="button" onClick={() => { }}>Comments</button>
          <button className="delete-btn" type="button" onClick={() => { dispatch(removeBookByThunk(book.item_id)); }}>Remove</button>
          <button className="edit-btn" type="button" onClick={() => { }}>Edit</button>
        </div>
      </div>
      <div className="progress-bar">
        <CircularProgress />
      </div>
      <div className="Line-2" />
      <div className="chapter-info">
        <p>CURRENT CHAPTER</p>
        <h3>{chapterCurrent[Math.floor(Math.random() * chapterCurrent.length)]}</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
