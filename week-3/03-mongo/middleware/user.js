const {User} = require('../db') 
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    let userData = await User.findOne({username:username})
    if(password === userData.password) {
        // next();
    }
    else {
        res.status(401).send('user not found');
    }
}

module.exports = userMiddleware;