"use strict";
var express_1 = require("express");
var redirect_1 = require("../middleware/redirect");
var router = express_1.Router();
// // POST /
// router.post("/", (req,res)=> {
//   res.status(201).json({
//     "id": "uuid",
//     "name": "string"
//   });
// });
// GET /
router.get("/", redirect_1.redirectToLogin, function (req, res) {
    console.log(req.session);
    var userId = req.session.userId;
    res.send("\n      <h1>Welcome</h1>\n      " + (userId ? "\n      <form method=\"POST\" action=\"/api/users/logout\">\n        <button>Logout</button>\n      </form>\n      " : "\n      <a href=\"/api/users/login\">Login</a>\n      <a href=\"/api/users/register\">Register</a>\n      ") + "\n  ");
});
module.exports = router;
//# sourceMappingURL=root.js.map