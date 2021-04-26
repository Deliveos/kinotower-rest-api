"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: "country"
    },
    duration: {
        type: Number,
        min: 1
    },
    yearOfIssue: {
        type: Number,
        min: 1900
    },
    age: {
        type: Number,
        min: 0,
        max: 18
    },
    categories: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "category"
        }],
    linkImg: {
        type: String
    },
    linkKinopoisk: {
        type: String
    },
    linkVideo: {
        type: String
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
exports.User = mongoose_1.model("Film", schema);
//# sourceMappingURL=Film.js.map