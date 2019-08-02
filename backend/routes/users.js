const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users');

/* GET users listing. */
router.get('/index', UsersControllers.index_get);

router.get('/', (req, res) => {
    res.send("<h1>Welcome to CryptoNative's Users!</h1>");
});

router.get('/signup', (req, res) => {
    res.send("<h1>Welcome to CryptoNative's Users Signup!</h1>")
});

router.post('/signup', UsersControllers.signup_post);

router.post('/login', UsersControllers.login_post);

router.post('/delete', UsersControllers.delete_user_get);

// router.get('/logout', UsersControllers.logout_get);

module.exports = router;