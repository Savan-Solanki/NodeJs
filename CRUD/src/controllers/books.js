const Book = require("../models/books")

const getAll = (req, res) => {
    res.json({
        msg: "get All Books" 
    })
}

const getOne = (req, res) => {
    // console.log(req.params[""])
    const dynamicData = req.params["dynamicData"]
    res.json({
        msg: "get one book"
    })
}

const createOne = (req, res) => {
    res.json({
        mag: "book created"
    })
}

const updateOne = (req, res) => {
    res.json({
        data: "book update"
    })
}

const deleteOne = (req, res) => {
    res.json({
        data: "book del"
    })
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne }