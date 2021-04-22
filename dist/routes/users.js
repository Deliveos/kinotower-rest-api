"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var config_1 = __importDefault(require("../config"));
var redirect_1 = require("../middleware/redirect");
var router = express_1.Router();
var users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        password: "password"
    },
    {
        id: 2,
        name: "Max Paddincton",
        email: "maxpad@gmail.com",
        password: "welcome"
    }
];
// POST /users/register
router.post("/users/register", redirect_1.redirectToHome, function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    if (name && email && password) {
        var exists = users.some(function (user) { return user.email === email; });
        if (!exists) {
            var user = {
                id: users.length + 1,
                name: name,
                email: email,
                password: password
            };
            users.push(user);
            req.session.userId = user.id;
            res.redirect("/");
        }
        else {
            res.redirect("/api/users/login");
        }
    }
    res.redirect("/api/users/register");
});
// GET /users/register
router.get("/users/register", redirect_1.redirectToHome, function (req, res) {
    console.log(__dirname);
    res.sendFile(path_1.default.join((__dirname + '/../../pages/register.html')));
});
// POST /users/login
router.post("/users/login", redirect_1.redirectToHome, function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        var user = users.find(function (user) { return user.email === email && user.password === password; });
        if (user) {
            req.session.userId = user.id;
            res.redirect("/");
        }
    }
    res.redirect("/api/users/login");
});
// GET /users/login
router.get("/users/login", redirect_1.redirectToHome, function (req, res) {
    console.log(__dirname);
    res.sendFile(path_1.default.join((__dirname + '/../../pages/login.html')));
});
// POST /users/logout
router.post("/users/logout", redirect_1.redirectToLogin, function (req, res) {
    req.session.destroy(function (err) {
        return res.redirect("/");
    });
    res.clearCookie(config_1.default.SESSION_NAME);
});
// GET /users
router.get("/users", function (req, res) {
    res.json([
        {
            "id": 1,
            "fio": "John Doe",
            "birthday": "1998-10-12",
            "gender": "male",
            "email": "john.doe@gmail.com",
            "password": "mynameis John",
            "role": "user",
            "createdAt": "2021-01-10",
            "deletedAt": null
        },
        "..."
    ]);
});
// POST /users
router.post("/users", function (req, res) {
    res.status(201).json(req.body.user);
});
// GET /users/{id}
router.get("/users/:id", function (req, res) {
    res.status(200).json({
        "id": 1,
        "fio": "John Doe",
        "birthday": "1998-10-12",
        "gender": "male",
        "email": "john.doe@gmail.com",
        "password": "mynameis John",
        "role": "user",
        "createdAt": "2021-01-10",
        "deletedAt": null
    });
});
// PUT /users/{id}
router.put("/users/:id", function (req, res) {
    res.status(200).json({
        "id": 1,
        "fio": "John Doe",
        "birthday": "1998-10-12",
        "gender": "male",
        "email": "john.doe@gmail.com",
        "password": "mynameis John",
        "role": "user",
        "createdAt": "2021-01-10",
        "deletedAt": null
    });
});
// DELETE /users/{id}
router.delete("/users/:id", function (req, res) {
    res.send("User " + req.params.id + " will be deleted");
});
module.exports = router;
//# sourceMappingURL=users.js.map