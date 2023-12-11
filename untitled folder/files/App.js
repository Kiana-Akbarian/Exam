import React, { useState, useEffect } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from './api';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    // Fetch books when the component mounts
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAddBook = async () => {
    const data = await addBook(newBook);
    setBooks([...books, data]);
    setNewBook({ title: '', author: '' });
  };

  const handleUpdateBook = async (id, updatedBook) => {
    try{
      const uptitle = prompt('enter the title',updatedBook.title);
      const upauth = prompt('enter the author',updatedBook.author);

      await updateBook(id,{title:uptitle,author:upauth});
      const updatedBook = await getBooks();
      setBooks(updatedBook);

    }catch(error){
      console.error('eroor',error);
    }
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Library Management System</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleUpdateBook(book.id, { title: book.title, author: book.author })}>
              Update
            </button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
}

export default App;
