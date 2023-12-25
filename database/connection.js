const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      process.env.DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = connect;
