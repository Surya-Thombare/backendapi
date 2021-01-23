const mongoose = require("mongoose");

const url =
  "mongodb+srv://Surya:Surya1234@cluster.pz6q6.mongodb.net/capstone?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to DB !!");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = InitiateMongoServer;
