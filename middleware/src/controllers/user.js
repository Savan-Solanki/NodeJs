const user = (req, res) => {
    res.status(200).json({ msg: "USER" })
}
const user2 = (req, res) => {
    res.status(200).json({ msg: "USER 2" })
}


module.exports = { user, user2 }