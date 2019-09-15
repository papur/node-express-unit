const mongoose = require('mongoose');
const keys = require('./config/keys');

async function connect() {
  try {
    await mongoose.connect(
      keys.mongoURI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
