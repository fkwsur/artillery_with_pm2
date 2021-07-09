const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');
const logger = require('morgan')

const http_server = require('http').createServer(app)
.listen(8080, () => {
  console.log('server on');
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(helmet());
app.use(compression());
app.use(logger('dev'));

 app.get('/user', (req, res) => {
    res.send('테스트');
 });