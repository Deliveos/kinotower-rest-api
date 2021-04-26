"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var config_1 = __importDefault(require("../config"));
var redirect_1 = require("../middleware/redirect");
var User_1 = require("../models/User");
var router = express_1.Router();
// POST /users/register
router.post("/users/register", redirect_1.redirectToHome, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, birthday, gender, email, password, exists, user, newUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, birthday = _a.birthday, gender = _a.gender, email = _a.email, password = _a.password;
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                exists = _b.sent();
                if (!!exists) return [3 /*break*/, 3];
                console.log(exists);
                user = new User_1.User({
                    fio: name,
                    birthday: birthday,
                    gender: gender,
                    email: email,
                    //TODO: add password hash
                    password: password
                });
                return [4 /*yield*/, user.save()];
            case 2:
                newUser = _b.sent();
                req.session.userId = newUser._id;
                return [2 /*return*/, res.redirect("/")];
            case 3:
                res.redirect("/api/users/login");
                _b.label = 4;
            case 4:
                res.redirect("/api/users/register");
                return [2 /*return*/];
        }
    });
}); });
// GET /users/register
router.get("/users/register", redirect_1.redirectToHome, function (req, res) {
    res.sendFile(path_1.default.join((__dirname + '/../../pages/register.html')));
});
// POST /users/login
router.post("/users/login", redirect_1.redirectToHome, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!(email && password)) return [3 /*break*/, 2];
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (user) {
                    //FIXME: hash
                    if (password === user.password) {
                        req.session.userId = user._id;
                        return [2 /*return*/, res.redirect("/")];
                    }
                }
                _b.label = 2;
            case 2:
                res.redirect("/api/users/login");
                return [2 /*return*/];
        }
    });
}); });
// GET /users/login
router.get("/users/login", redirect_1.redirectToHome, function (req, res) {
    console.log(__dirname);
    res.sendFile(path_1.default.join((__dirname + '/../../pages/login.html')));
});
// POST /users/logout
router.post("/users/logout", redirect_1.redirectToLogin, function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            throw new Error(err);
        }
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