const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async() => {
try {
    await mongoose.connect(URI);
    console.log('Database Connect sucessfully');
} catch (error) {
    console.log('Database Connection faild');
    process.exit(0);
}
}

module.exports = connectDb;