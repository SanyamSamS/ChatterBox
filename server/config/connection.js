const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chatterBox_db');

mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connected successfully');
});

module.exports = mongoose.connection;
