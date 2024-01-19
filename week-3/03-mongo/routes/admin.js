const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, Index} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    let username = req.username;
    let password = req.password;
    const admin = new Admin({username, password});
    res.json('Admin created successfully');
});

router.post('/courses', adminMiddleware, async (req, res) => {
    let courseid = await Index.findOne({type: 'course'}).exec();
    let title = req.body.title;
    let discription = req.body.discription;
    let price = req.body.price;
    let imageLink = req.body.imageLink;
    let courseDetails = { courseid, title, discription, price, imageLink}

    if(!(await Course.findOne({title}).exec())) {
        new Course(courseDetails);
    }
    courseid.value++;
    await courseid.save();
    

});

router.get('/courses', adminMiddleware, async (req, res) => {
    let courses = Course.find({});
    res.json(courses);
});

module.exports = router;