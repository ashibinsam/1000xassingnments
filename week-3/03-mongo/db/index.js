const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ashibinsam:3tzsAvD2oUUFiZpl@cluster0.1jibl45.mongodb.net/course-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
        courseid: Number,
        title: String,
        discription: String,
        price: Number,
        imageLink: String
    
});

const IndexSchema = new mongoose.Schema({
    type: String,  // used to refer what index does the object maintains
    value: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Index = mongoose.model('Index', IndexSchema);

//creating a new instance of the Admin object to store the data in the structure specified by the schema.
// data = {
//     username: 'Shibin Sam',
//     password: 'Hi there I am sam'
// }
// let admin = new Admin(data);

// admin.save();
// //TODO: remove the dummy save and write proper code here.
module.exports = {
    Admin,
    User,
    Course,
    Index
}