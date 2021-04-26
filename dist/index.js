"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var config_1 = __importDefault(require("./config"));
var routes_1 = __importDefault(require("./routes"));
var logger_1 = __importDefault(require("./logger"));
var index_1 = __importDefault(require("./database/index"));
var app = express_1.default();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_session_1.default({
    name: config_1.default.SESSION_NAME,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    secret: config_1.default.SESSION_SECRET,
    cookie: {
        httpOnly: true,
        maxAge: 10 * 1000 * 60,
        secure: config_1.default.NODE_ENV === "production" ? true : false
    }
}));
// Logger
app.use(function (req, res, next) {
    logger_1.default.debug({
        method: req.method,
        date: new Date().toDateString(),
        payload: req.body
    });
    next();
});
routes_1.default(app);
index_1.default(config_1.default.MONGO_URL, config_1.default.DB_NAME).then(function (connection) {
    app.listen(config_1.default.PORT, function () {
        console.log("Server listen at " + config_1.default.BASE_URL + ":" + config_1.default.PORT);
        console.log("Connected to '" + (connection === null || connection === void 0 ? void 0 : connection.db.databaseName) + "' database");
    });
});
//# sourceMappingURL=index.js.map