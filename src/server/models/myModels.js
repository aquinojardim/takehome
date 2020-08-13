require('dotenv').config();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// save it on .env file for security
const DB_URI = process.env.DB_URI;

// connect to database
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // add codebase name
    dbName: "myDB"
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch(err => {
    console.log('Database fail on connect')
        return next({
          log: "Error in database",
          message: { error: `This is an error ${err}` },
        });
  });

// create the shema
const mySchema = new Schema({
  item: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Model = mongoose.model("Model", mySchema);

module.exports = Model;