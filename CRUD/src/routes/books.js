const express = require("express")
const { getAll, getOne, createOne, updateOne, deleteOne } = require("../controllers/books")

const route = express.Router()


route.get("/getAll", getAll)

route.get("/getOne", getOne)
route.get("/:dynamicData", createOne)

route.get("/updateOne", updateOne)
route.get("/deleteOne", deleteOne)

module.exports = route