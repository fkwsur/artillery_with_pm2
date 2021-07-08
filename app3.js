const express = require('express');
const app = express();


app.get('/', (req,res) => {
  res.send("서버3")
})

app.listen(8083);