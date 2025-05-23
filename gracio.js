const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
var data = [{msg:'Hi',id:1},{msg:'Hru',id:2},{msg:'Good',id:3}];
app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});