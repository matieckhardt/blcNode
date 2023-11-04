const express = require('express');
const app = express();
const path = require('path');
const port = 3010;

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index'));

app.listen(3010 || port, () => {
  console.log('server on port: ', port)
})