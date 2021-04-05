const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//? Async

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected Good job JJ');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//? no Async

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log('MongoDB Connected Good job JJ'))
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

module.exports = connectDB;
