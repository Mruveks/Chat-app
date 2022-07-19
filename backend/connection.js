const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.enk8b.mongodb.net/chatAppMern?retryWrites=true&w=majority`, () => {
    console.log("connected to mongoDB")
})



