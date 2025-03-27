const infoMiddleware = (req, res, next) => {
    console.log("Middlware running")
    req.setPrams()
    next()
    // res.status(400).json({ msg: "Middlweare says bad req" })
}
const infoErrorMiddle = (error, req, res, next) => {
    console.log("Error Middlware callrunningded")
    console.log(error)
    res.status(500).json({ msg: "Server Error", error: error })
}


module.exports = { infoMiddleware, infoErrorMiddle }