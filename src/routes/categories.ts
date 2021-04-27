import { Router } from "express";
import { onlyAdmin } from "../middleware/isadmin";
import { Category } from "../models/Category";

const router: Router = Router();

// POST /categories
router.post("/categories", onlyAdmin, async (req,res)=> {
  const category = new Category(req.body);
  const newCategory = await category.save();
  res.json(newCategory);
});


// GET /categories
router.get("/categories", onlyAdmin, async (req,res)=> {
  res.json(await Category.find());
});


// GET /categories/{id}
router.get("/categories/:id", onlyAdmin, async (req,res)=> {
  res.json(await Category.findOne({_id: req.params.id}));

});


// PUT /categories/{id}
router.put("/categories/:id", onlyAdmin, async (req,res)=> {
  res.json(await Category.updateOne({_id: req.params.id}, req.body));
});


// DELETE /categories/{id}
router.delete("/categories/:id", onlyAdmin, async (req,res)=> {
  res.json(await Category.deleteOne({_id: req.params.id}));
});


export = router;