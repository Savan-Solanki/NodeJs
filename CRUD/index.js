const express = require("express")
const bookRoutes = require("./src/routes/books")


const app = express()

app.get("/", (req, res) => {
    res.send("server is run")
})
app.use("/books", bookRoutes)

app.listen(8001)