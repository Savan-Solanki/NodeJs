const test = (req, res) => {
    res.status(200).json({ msg: "GET API" })
}


module.exports = { test }