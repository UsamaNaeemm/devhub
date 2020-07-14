const express = require('express');
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const bodyParser = require('body-parser')

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello'));

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = 5000;

app.listen(port, () => {
  console.log(`this server is running on ${port}`);
});
