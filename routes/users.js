const router = require('express').Router();
const { getUser, patchUserInfo } = require('../controllers/users');
const { userInfoValid } = require('../middlewares/celebrateValid');

router.get('/me', getUser);
router.patch('/me', userInfoValid, patchUserInfo);

module.exports = router;
