const bodyParser = require('body-parser');
const connectToMongo = require('./db');
const express = require('express');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();
// console.log(process.env)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Apply to all requests
connectToMongo();
const app = express();
app.use(limiter);
const port = 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}))


app.use("/api/auth",require('./routes/auth'));
app.use("/api/notes",require('./routes/notes'));
app.use("/api/search",require('./routes/search'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;