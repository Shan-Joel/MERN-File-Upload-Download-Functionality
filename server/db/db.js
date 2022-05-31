const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://joel:joel123@mernapp.1d0migs.mongodb.net/?retryWrites=true&w=majority';

mongoose
   .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
   })
   .then(() => {
      console.log('DB Connection Success!');
   })
   .catch((err) => {
      console.log('DB Connection Error', err);
   });
