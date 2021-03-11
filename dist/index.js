"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
// Middleware
app.use(express_1.default.json());
routes_1.default(app);
app.listen(config_1.default.PORT, function () {
    console.log("Server listen at " + config_1.default.BASE_URL + ":" + config_1.default.PORT);
});
//# sourceMappingURL=index.js.map