"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
// POST /film
router.post("/film", function (req, res) {
    res.status(201).json({
        "id": "uuid",
        "name": "string",
        "country": "uuid",
        "duration": "integer",
        "yearOfIssue": "datetime",
        "age": "integer",
        "linkImg": "string",
        "linkKinopoisk": "string",
        "linkVideo": "string",
        "createdAt": "datetime",
        "deletedAt": "datetime"
    });
});
// GET /film
router.get("/film", function (req, res) {
    res.json([{
            "id": "uuid",
            "name": "string",
            "country": "uuid",
            "duration": "integer",
            "yearOfIssue": "datetime",
            "age": "integer",
            "linkImg": "string",
            "linkKinopoisk": "string",
            "linkVideo": "string",
            "createdAt": "datetime",
            "deletedAt": "datetime"
        }, "..."]);
});
// GET /film/{id}
router.get("/film/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string",
        "country": "uuid",
        "duration": "integer",
        "yearOfIssue": "datetime",
        "age": "integer",
        "linkImg": "string",
        "linkKinopoisk": "string",
        "linkVideo": "string",
        "createdAt": "datetime",
        "deletedAt": "datetime"
    });
});
// PUT /film/{id}
router.get("/film/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string",
        "country": "uuid",
        "duration": "integer",
        "yearOfIssue": "datetime",
        "age": "integer",
        "linkImg": "string",
        "linkKinopoisk": "string",
        "linkVideo": "string",
        "createdAt": "datetime",
        "deletedAt": "datetime"
    });
});
// DELETE /film/{id}
router.get("/film/:id", function (req, res) {
    res.send("Film " + req.params.id + " will be deleted");
});
// GET /film/{id}/review
router.get("/film/:id/review", function (req, res) {
    res.json([
        {
            "id": "uuid",
            "film": "ссылка на ID film",
            "user": "ссылка на ID user",
            "message": "string",
            "createdAt": "datetime",
            "isApproved": "boolean",
            "deletedAt": null
        },
        "..."
    ]);
});
// GET /film/{id}/review
router.get("/film/:id/rating", function (req, res) {
    res.json([
        {
            "id": "uuid",
            "film": "ссылка на ID film",
            "user": "ссылка на ID user",
            "ball": "integer",
            "createdAt": "datetime"
        },
        "..."
    ]);
});
//# sourceMappingURL=film.js.map