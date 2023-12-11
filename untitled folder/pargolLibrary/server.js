const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const port = 3001;

app.use(cors()); // Add this line
app.use(bodyParser.json());



let books = [
  { id: 1, title: 'pargol1', author: 'pargolllll' },
  { id: 2, title: 'Kiaka', author: 'kianannnasfas' },

];


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


app.listen(port, () => {
  console.log(`Server is running on http://localhost:3001`);
});
