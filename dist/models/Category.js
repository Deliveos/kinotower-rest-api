"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "category",
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {
    id: true,
});
exports.User = mongoose_1.model("Category", schema);
//# sourceMappingURL=Category.js.map