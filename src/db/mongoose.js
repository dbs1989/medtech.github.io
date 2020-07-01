const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://medtech:12345@cluster0-pcxmd.mongodb.net/medtech?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
