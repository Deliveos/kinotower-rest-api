import { Router } from "express";
import { onlyAdmin } from "../middleware/isadmin";
import { Country } from "../models/Country";

const router: Router = Router();

// POST /countries
router.post("/countries", onlyAdmin, async (req,res)=> {
  const country = new Country(req.body);
  res.json(await country.save());
});


// GET /countries
router.get("/countries", onlyAdmin, async (req,res)=> {
  res.json(await Country.find());
});


// PUT /countries/{id}
router.put("/countries/:id", onlyAdmin, async (req,res)=> {
  res.json(await Country.updateOne({_id: req.params.id}, req.body));
});


// DELETE /countries/{id}
router.delete("/countries/:id", onlyAdmin, async (req,res)=> {
  res.json(await Country.deleteOne({_id: req.params.id}));
});


export = router;