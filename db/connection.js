require('dotenv').config()
const mongoose = require("mongoose")

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/ATLive";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    })
    .catch((err) => {
        console.log(err)
    })
// mongoose.connection.on('error', function (err) {
//     console.error(`MongoDB connection error: ${err}`);
//     process.exit(-1);
// }
// );
// mongoose.connection.once('open', function () {
//     console.log("Mongoose has connected to MongoDB!");
// });

module.exports = mongoose;
