const express = require('express');
const app = express();


app.get('/', (req,res) => {
  res.send("서버2")
})

app.listen(8082);