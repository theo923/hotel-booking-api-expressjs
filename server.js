require('dotenv').config()

//library
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require("morgan");
const mongoose = require("mongoose");

//initialize controller
const register = require("./controller/registerBooking");
const get = require("./controller/getBooking");
const remove = require("./controller/removeBooking");

//initialize backend
const app = express()

app.use(logger('short'))
app.use(helmet())
app.use(cors());
app.use(express.json())

var options = {
  keepAlive: true,
  connectTimeoutMS: 30000,
  useUnifiedTopology: true,
};

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DATABASE_URI, options, (err) => {
    if (err) console.log(err);
  
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });
}


//call controller
app.get('/', (req, res) => {
  res.send('the server is running')
})
app.post('/registerBooking', register.handleRegister())
app.get('/getBooking/:bookingId', get.handleGetBooking())
app.delete('/removeBooking/:bookingId', remove.handleRemoveBooking())

module.exports = app