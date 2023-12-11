const BASE_URL = 'http://localhost:3001/api';

export const getBooks = async () => {
  const response = await fetch(`${BASE_URL}/books`);
  const data = await response.json();
  return data;
};

export const addBook = async (newBook) => {
  const response = await fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
  const data = await response.json();
  return data;
};

export const updateBook = async (id, updatedBook) => {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBook),
  });
  const data = await response.json();
  return data;
};

export const deleteBook = async (id) => {
  const response = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
