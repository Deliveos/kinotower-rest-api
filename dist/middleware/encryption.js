"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryption = void 0;
var encrypt_1 = require("../services/encrypt");
var encryption = function (req, res, next) {
    if (req.body.email) {
        req.body.email = encrypt_1.encrypt(req.body.email);
    }
    if (req.body.password) {
        req.body.password = encrypt_1.encrypt(req.body.password);
    }
    next();
};
exports.encryption = encryption;
//# sourceMappingURL=encryption.js.map