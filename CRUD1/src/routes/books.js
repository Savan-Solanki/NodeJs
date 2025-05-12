const express = require("express")
const book = require("../controllers/books")

const route = express.Router()


route.get("/", book.getAll)
route.get("/:bookId", book.getOne)
route.post("/", book.createOne)
route.put("/:bookId", book.updateOne)
route.delete("/:bookId", book.deleteOne)

module.exports = route