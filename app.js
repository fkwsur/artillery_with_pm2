const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan')
//const rateLimit = require("express-rate-limit"); 
//const limiter = rateLimit({ 
//  windowMs: 1*60*1000, 
//  max: 100 
//  })
const http_server = require('http').createServer(app)
.listen(8080, () => {
  console.log('server on');
});

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(helmet());
app.use(compression());
app.use(logger({
  format: 'dev',
  stream: fs.createWriteStream('app.log', {'flags': 'w'})
}));
//app.use(limiter);

 app.get('/user', (res,req) => {
   try{
     res.send('유저들입장')
   } catch(err){
     console.log(err);
   }
 });