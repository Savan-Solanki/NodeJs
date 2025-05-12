const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    message:"server is running"
  });
});


app.post("/", (req, res) => {
  res.json({
    message:"Post Api"
  });
});

app.put("/", (req, res) => {
  res.json({
    message:"Put Api"
  });
});

app.delete("/", (req, res) => {
  res.json({
    message:"Delete Api"
  });
});

app.patch("/", (req, res) => {
  res.json({
    message:"Patch Api"
  });
});


// app.listen(5005);
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// {
//   '100': 'Continue',
//   '101': 'Switching Protocols',
//   '102': 'Processing',
//   '103': 'Early Hints',
//   '200': 'OK',
//   '201': 'Created',
//   '202': 'Accepted',
//   '203': 'Non-Authoritative Information',
//   '204': 'No Content',
//   ...
//   '505': 'HTTP Version Not Supported',
//   '506': 'Variant Also Negotiates',
//   '507': 'Insufficient Storage',
//   '508': 'Loop Detected',
//   '509': 'Bandwidth Limit Exceeded',
//   '510': 'Not Extended',
//   '511': 'Network Authentication Required'
// }