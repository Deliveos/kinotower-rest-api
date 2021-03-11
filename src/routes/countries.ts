import { Router } from "express";

const router: Router = Router();

// POST /countries
router.post("/countries", (req,res)=> {
  res.status(201).json({
    "id": "uuid",
    "name": "string"
  });
});


// GET /countries
router.get("/countries", (req,res)=> {
  res.json([
    {
      "id": "uuid",
      "name": "string"
    },
    "..."]);
});


// GET /countries/{id}
router.get("/countries/:id", (req,res)=> {
  res.json({
    "id": "uuid",
    "name": "string"
  });
});


// PUT /countries/{id}
router.put("/countries/:id", (req,res)=> {
  res.json({
    "id": "uuid",
    "name": "string"
  });
});


// DELETE /countries/{id}
router.delete("/countries/:id", (req,res)=> {
  res.send(`Country ${req.params.id} will be deleted`);
});


export = router;