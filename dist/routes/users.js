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
var encryption_1 = require("../middleware/encryption");
var isadmin_1 = require("../middleware/isadmin");
var redirect_1 = require("../middleware/redirect");
var User_1 = require("../models/User");
var router = express_1.Router();
// POST /users/register
router.post("/users/register", redirect_1.redirectToHome, encryption_1.encryption, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fio, birthday, gender, email, password, exists, user, newUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, fio = _a.fio, birthday = _a.birthday, gender = _a.gender, email = _a.email, password = _a.password;
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                exists = _b.sent();
                if (!!exists) return [3 /*break*/, 3];
                console.log(exists);
                user = new User_1.User({
                    fio: fio,
                    birthday: birthday,
                    gender: gender,
                    email: email,
                    password: password
                });
                return [4 /*yield*/, user.save()];
            case 2:
                newUser = _b.sent();
                req.session.userId = newUser._id;
                req.session.role = newUser.role;
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
router.post("/users/login", redirect_1.redirectToHome, encryption_1.encryption, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!(email && password)) return [3 /*break*/, 2];
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 1:
                user = _b.sent();
                console.log(user);
                if (user) {
                    if (password === user.password) {
                        req.session.userId = user._id;
                        req.session.role = user.role;
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
router.get("/users", isadmin_1.onlyAdmin, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.User.find()];
            case 1:
                users = _a.sent();
                if (users) {
                    return [2 /*return*/, res.json(users)];
                }
                res.json({});
                return [2 /*return*/];
        }
    });
}); });
// GET /users/{id}
router.get("/users/:id", redirect_1.redirectToLogin, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.session.role === "admin")) return [3 /*break*/, 2];
                return [4 /*yield*/, User_1.User.findOne({ _id: req.params.id })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
            case 2:
                if (!(req.session.userId === req.params.id)) return [3 /*break*/, 4];
                return [4 /*yield*/, User_1.User.findOne({ _id: req.params.id })];
            case 3:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
            case 4:
                res.redirect("/");
                return [2 /*return*/];
        }
    });
}); });
// PUT /users/{id}
router.put("/users/:id", redirect_1.redirectToLogin, encryption_1.encryption, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                if (!(req.session.role === "admin")) return [3 /*break*/, 2];
                return [4 /*yield*/, User_1.User.updateOne({ _id: req.params.id }, req.body)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
            case 2:
                if (!(req.session.userId === req.params.id)) return [3 /*break*/, 4];
                return [4 /*yield*/, User_1.User.updateOne({ _id: req.params.id }, req.body)];
            case 3:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
            case 4:
                res.redirect("/");
                return [2 /*return*/];
        }
    });
}); });
// DELETE /users/{id}
router.delete("/users/:id", isadmin_1.onlyAdmin, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.User.deleteOne({ _id: req.params.id }, req.body)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.json(user)];
        }
    });
}); });
module.exports = router;
//# sourceMappingURL=users.js.map