const express = require('express')

const { getBooks } = require('../db/db')

const router = express.Router()

// GET /api/v1/books
router.get('/', (req, res) => {
  getBooks()
    .then((books) => res.json(books))
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

// GET /api/v1/books/:bookId
router.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId
  getBooks()
    .then((books) => {
      const book = books.find((book) => book.id == bookId)
      res.json(book)
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong' }))
})

module.exports = router
