const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const bodyParser = require('body-parser');
const User = require('./models/User');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err))

// app.get("/", (req, res) => {
//   const user = new User({
//     firstName: "jim",
//     lastName: "jim",
//     email: "jim@jim.jim", 
//     password: "jimisgreat123",
//     phoneNumber: '123123'
//   })
//   user.save()
//   res.send("Hello, World!")
// });

app.get('/', (req, res) => res.send('Hello World'))

app.use('/api/users', users)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`))
