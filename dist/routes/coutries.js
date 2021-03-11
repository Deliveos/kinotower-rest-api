"use strict";
var express_1 = require("express");
var router = express_1.Router();
// POST /countries
router.post("/countries", function (req, res) {
    res.status(201).json({
        "id": "uuid",
        "name": "string",
        "parent": "ссылка на ID category, default: null",
        "deletedAt": "datetime"
    });
});
// GET /countries
router.get("/countries", function (req, res) {
    res.json([
        {
            "id": "uuid",
            "name": "string"
        },
        "..."
    ]);
});
// GET /countries/{id}
router.get("/countries/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string"
    });
});
// PUT /countries/{id}
router.put("/countries/:id", function (req, res) {
    res.json({
        "id": "uuid",
        "name": "string"
    });
});
// DELETE /countries/{id}
router.delete("/countries/:id", function (req, res) {
    res.send("Country " + req.params.id + " will be deleted");
});
module.exports = router;
//# sourceMappingURL=coutries.js.map