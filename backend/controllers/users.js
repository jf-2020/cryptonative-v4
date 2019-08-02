const User = require('../models/users');
const bcrypt = require('bcryptjs');

index_get = async (req, res) => {
    console.log("controller: index_get");
    const return_value = await User.getMaxUserId();
    console.log("return_value:", return_value);
    // res.send('<h1>Index: Get</h1>');  
    // the res.send works
}

signup_post = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    console.log('req.body is displayed as: ', req.body);
    console.log('first_name as entered', first_name);
    console.log('last_name as entered', last_name);
    console.log('email as entered', email);
    console.log('password as entered', password);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userInstance = new User(null, first_name, last_name, email, hash);
    let check = await userInstance.CheckIfDuplicate();

    if (typeof check === 'object') {
        alert('All your coin are belong to us ya freakin jabronie!!!!');

    } else {
        await userInstance.save().then(response => {
            console.log("signup response is", response);
            res.send("<h1>User has been saved</h1>");
        });
    };
    // res.sendStatus(200);
}

login_post = async (req, res) => {
    const { email, password } = req.body;
    console.log("login_post req.body", req.body);

    const userInstance = new User(null, null, null, email, password);
    // userInstance.login().then(response => {
    //     req.session.is_logged_in = response.isValid;
    //     console.log("Post login response is: ", response)
    // })
    const userData = await userInstance.getUserByEmail();
    console.log("userData: ", userData)

    const isValid = await bcrypt.compareSync(password, userData.password);
    console.log("isValid:", isValid);

    if (!!isValid) {
        // req.session.is_logged_in = true;
        // req.session.first_name = userData.first_name;
        // req.session.last_name = userData.last_name;
        // req.session.user_id = userData.user_id;  // this used to not work because it called user_id which does not exist within the session.
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
    // bcrypt.compareSync(this.password, hashedPassword);
};

delete_user_get = async (req, res) => {
    // const { email, password } = req.body;
    const email = req.body.email;
    const password = req.body.password;
    console.log("delete req.body", req.body);

    const userInstance = new User(null, null, null, email, password);
    const userData = await userInstance.getUserByEmail();
    console.log("userData: ", userData);

    // const response = await User.delete_user_get(req.body.email)
    const isValid = await bcrypt.compareSync(password, userData.password);
    console.log("isValid:", isValid)

    if (!!isValid) {
        await userInstance.deleteUserByEmail().then(response => {
            console.log("delete response is", response);
            res.send("<h1>User has been deleted</h1>")
        });

    } else {
        res.sendStatus(401)
    }
}

module.exports = {
    index_get,
    delete_user_get,
    signup_post,
    login_post,
}