const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const data = [{msg:'Hi',id:1},{msg:'Hru',id:2},{msg:'Good',id:3}];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/data', (req, res) => {
  res.json(data); // use .json() instead of .send(data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});