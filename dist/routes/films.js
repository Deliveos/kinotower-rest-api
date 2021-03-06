"use strict";
var express_1 = require("express");
var router = express_1.Router();
// POST /films
router.post("/films", function (req, res) {
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
// GET /films
router.get("/films", function (req, res) {
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
// GET /films/{id}
router.get("/films/:id", function (req, res) {
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
// PUT /films/{id}
router.put("/films/:id", function (req, res) {
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
// DELETE /films/{id}
router.delete("/films/:id", function (req, res) {
    res.send("Film " + req.params.id + " will be deleted");
});
/*
* review
*/
// POST /films/{id}/review
router.post("/films/:id/review", function (req, res) {
    res.status(201).json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "message": "string",
        "createdAt": "datetime",
        "isApproved": "boolean",
        "deletedAt": null
    });
});
// GET /films/{id}/review
router.get("/films/:id/review", function (req, res) {
    res.json([{
            "id": "uuid",
            "film": "???????????? ???? ID film",
            "user": "???????????? ???? ID user",
            "message": "string",
            "createdAt": "datetime",
            "isApproved": "boolean",
            "deletedAt": null
        },
        "..."]);
});
// GET /film/{id}/review/{id}
router.get("/films/:id/review/:reviewId", function (req, res) {
    res.json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "message": "string",
        "createdAt": "datetime",
        "isApproved": "boolean",
        "deletedAt": null
    });
});
// PUT /film/{id}/review/{id}
router.put("/films/:id/review/:reviewId", function (req, res) {
    res.json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "message": "string",
        "createdAt": "datetime",
        "isApproved": "boolean",
        "deletedAt": null
    });
});
// DELETE /film/{id}/review/{id}
router.delete("/films/:id/review/:reviewId", function (req, res) {
    res.send("Review with id " + req.params.reviewId + " will be deleted");
});
/*
* rating
*/
// POST /film/{id}/rating
router.post("/films/:id/rating", function (req, res) {
    res.status(201).json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "ball": "integer",
        "createdAt": "datetime"
    });
});
// GET /films/rating
router.get("/films/rating", function (req, res) {
    res.json([{
            "id": "uuid",
            "film": "???????????? ???? ID film",
            "user": "???????????? ???? ID user",
            "ball": "integer",
            "createdAt": "datetime"
        },
        "..."]);
});
// GET /films/{id}/rating
router.get("/films/:id/rating", function (req, res) {
    res.json([
        {
            "id": "uuid",
            "film": "???????????? ???? ID film",
            "user": "???????????? ???? ID user",
            "ball": "integer",
            "createdAt": "datetime"
        },
        "..."
    ]);
});
// GET /films/{id}/rating/{id}
router.get("/films/:id/rating/:ratingId", function (req, res) {
    res.json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "ball": "integer",
        "createdAt": "datetime"
    });
});
// PUT /films/{id}/rating/{id}
router.put("/films/:id/rating/:ratingId", function (req, res) {
    res.json({
        "id": "uuid",
        "film": "???????????? ???? ID film",
        "user": "???????????? ???? ID user",
        "ball": "integer",
        "createdAt": "datetime"
    });
});
// DELETE /films/{id}/rating/{id}
router.delete("/films/:id/rating/:ratingId", function (req, res) {
    res.send("Ratig " + req.params.ratingId + " will be deleted");
});
module.exports = router;
//# sourceMappingURL=films.js.map