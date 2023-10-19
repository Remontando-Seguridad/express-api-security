const Express = require('express');
const router = Express.Router();

const userRouter = require('./user.router');

router.use("/user", userRouter);

module.exports = router;