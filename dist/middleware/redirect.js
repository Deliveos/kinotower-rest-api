"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectToHome = exports.redirectToLogin = void 0;
var redirectToLogin = function (req, res, next) {
    if (!req.session.userId) {
        res.redirect("/api/users/login");
    }
    else {
        next();
    }
};
exports.redirectToLogin = redirectToLogin;
var redirectToHome = function (req, res, next) {
    if (req.session.userId) {
        res.redirect("/");
    }
    else {
        next();
    }
};
exports.redirectToHome = redirectToHome;
// exports.redirectToHome = redirectToHome;
// exports.redirectToLogin = redirectToLogin;
//# sourceMappingURL=redirect.js.map