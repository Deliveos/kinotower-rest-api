import { Router } from "express";

const router: Router = Router();

// POST /categories
router.post("/categories", (req,res)=> {
  res.status(201).json({
    "id": "uuid",
    "name": "string",
    "parent": "ссылка на ID category, default: null",
    "deletedAt": "datetime"
  });
});


// GET /categories
router.get("/categories", (req,res)=> {
  res.json([{
    "id": "uuid",
    "name": "string",
    "parent": "ссылка на ID category, default: null",
    "deletedAt": "datetime"
  }, "..."]);
});


// GET /categories/{id}
router.get("/categories/:id", (req,res)=> {
  res.json({
    "id": "uuid",
    "name": "string",
    "parent": "ссылка на ID category, default: null",
    "deletedAt": "datetime"
  });
});


// PUT /categories/{id}
router.put("/categories/:id", (req,res)=> {
  res.json({
    "id": "uuid",
    "name": "string",
    "parent": "ссылка на ID category, default: null",
    "deletedAt": "datetime"
  });
});


// DELETE /categories/{id}
router.delete("/categories/:id", (req,res)=> {
  res.send(`Category ${req.params.id} will be deleted`);
});


export = router;