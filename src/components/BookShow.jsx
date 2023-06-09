import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {

    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}></button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow
