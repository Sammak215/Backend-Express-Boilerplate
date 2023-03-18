const router = require("express-promise-router")();

const Example = require("../controllers/example");

router.get("/", Example.example);

const User = require("../controllers/user");
router.post("/create", User.create_user);

module.exports = router;
