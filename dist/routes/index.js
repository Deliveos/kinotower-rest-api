"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = __importDefault(require("./users"));
var films_1 = __importDefault(require("./films"));
var categories_1 = __importDefault(require("./categories"));
var countries_1 = __importDefault(require("./countries"));
var root_1 = __importDefault(require("./root"));
exports.default = (function (app) {
    app.use("/", root_1.default);
    app.use("/api/", users_1.default);
    app.use("/api/", films_1.default);
    app.use("/api/", categories_1.default);
    app.use("/api/", countries_1.default);
});
//# sourceMappingURL=index.js.map