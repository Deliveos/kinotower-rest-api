"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    id: true,
});
exports.User = mongoose_1.model("Country", schema);
//# sourceMappingURL=Country.js.map