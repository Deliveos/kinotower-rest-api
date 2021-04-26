"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true
    },
    film: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "film"
    },
    user: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "user"
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    id: true,
});
exports.User = mongoose_1.model("Review", schema);
//# sourceMappingURL=Review.js.map