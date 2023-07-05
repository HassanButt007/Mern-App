const mongoose = require("mongoose");

const Db = "mongodb+srv://propelSoft:propelsoft321@cluster0.ygwfyqo.mongodb.net/"

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
})
    .then(() => {
        console.log("Mongoose connected");
    })
    .catch((err) => {
        console.log("Mongoose Not Connected", err);
    });

