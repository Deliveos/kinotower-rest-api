"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyAdmin = void 0;
var onlyAdmin = function (req, res, next) {
    if (req.session.role !== "admin") {
        return res.status(401).redirect("/");
    }
    next();
};
exports.onlyAdmin = onlyAdmin;
//# sourceMappingURL=isadmin.js.map