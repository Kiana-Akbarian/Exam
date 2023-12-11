const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 
app.use(bodyParser.json());

let books = [
  { id: 1, title: 'pargolslife', author: 'Pargol' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  books = books.map((book) => (book.id === id ? updatedBook : book));
  res.json(updatedBook);
});

app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((book) => book.id !== id);
  res.json({ message: 'Book deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
