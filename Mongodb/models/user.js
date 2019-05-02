var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const db = mongoose.connection;
db.once("open", () => {
    console.log("mongodb connected.")
});

var UserSchema = new Schema(
    {
        id: Number,
        name: String,
        sex: String,
        age: Number,
        title: String,
        startDate: String
    },
    {
        collection: 'User',
        versionKey: false
    });

module.exports = mongoose.model('User', UserSchema);
