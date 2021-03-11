"use strict";
var express_1 = require("express");
var router = express_1.Router();
// POST /categories
router.post("/categories", function (req, res) {
    res.status(201).json({
        "id": "uuid",
        "name": "string",
        "parent": "ссылка на ID category, default: null",
        "deletedAt": "datetime"
    });
});
// GET /categories
router.get("/categories", function (req, res) {
    res.json([{
            "id": "uuid",
            "name": "string",
            "parent": "ссылка на ID category, default: null",
            "deletedAt": "datetime"
        }, "..."]);
});
// GET /categories/{id}
router.get("/categories/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string",
        "parent": "ссылка на ID category, default: null",
        "deletedAt": "datetime"
    });
});
// PUT /categories/{id}
router.put("/categories/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string",
        "parent": "ссылка на ID category, default: null",
        "deletedAt": "datetime"
    });
});
// DELETE /categories/{id}
router.delete("/categories/:id", function (req, res) {
    res.send("Category " + req.params.id + " will be deleted");
});
module.exports = router;
//# sourceMappingURL=categories.js.map