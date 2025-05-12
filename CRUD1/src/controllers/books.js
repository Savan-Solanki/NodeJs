const Book = require("../models/books");

const getAll = (req, res) => res.json({ data: Book });



const getOne = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        if (isNaN(bookId) || bookId < 0) {
            return res.status(400).json({ error: "Invalid book ID" });
        }

        if (!Book[bookId]) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.json({ data : Book[bookId] });
    } catch (err) {
        res.status(500).json({ error: "Server error", details: err.message });
    }
};


const createOne = (req, res) => {
    try {
        const { title, author } = req.body;

        if (!title || !author) {
            return res.status(400).json({ error: "Title and Author are required" });
        }

        Book.push({ title, author });
        res.status(201).json({ message: "Book created" });
    } catch (err) {
        res.status(500).json({ error: "Server error", details: err.message });
    }
};


const updateOne = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        if (isNaN(bookId) || bookId < 0) {
            return res.status(400).json({ error: "Invalid book ID" });
        }

        const book = Book[bookId];
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        Book[bookId] = { ...book, ...req.body };
        res.json({ message: "Book updated", book: Book[bookId] });
    } catch (err) {
        res.status(500).json({ error: "Server error", details: err.message });
    }
};


const deleteOne = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        if (isNaN(bookId) || bookId < 0) {
            return res.status(400).json({ error: "Invalid book ID" });
        }

        if (!Book[bookId]) {
            return res.status(404).json({ error: "Book not found" });
        }

        Book.splice(bookId, 1);
        res.json({ message: "Book deleted" });
    } catch (err) {
        res.status(500).json({ error: "Server error", details: err.message });
    }
};

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
