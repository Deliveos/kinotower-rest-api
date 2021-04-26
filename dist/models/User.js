"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    fio: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        uniquie: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    id: true,
});
exports.User = mongoose_1.model("User", schema);
//# sourceMappingURL=User.js.map