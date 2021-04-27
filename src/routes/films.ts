import { Router } from "express";
import { onlyAdmin } from "../middleware/isadmin";
import { redirectToLogin } from "../middleware/redirect";
import {Film} from "../models/Film";
import { Review } from "../models/Review";
import { User } from "../models/User";

const router: Router = Router();


// POST /films
router.post("/films", onlyAdmin, async (req, res)=> {
  try {
    const film = new Film({
      ...req.body
    })
    const addedFilm = await film.save();
    res.status(201).json(addedFilm);
  } catch (e) {
    res.status(500).json({message: "Error film save"});
  } 
});


// GET /films
router.get("/films", async (req, res)=> {
  const films = await Film.find();
  res.json(films);
});


// GET /films/{id}
router.get("/films/:id", async (req, res)=> {
  const film = await Film.findOne({_id: req.params.id});
  res.json(film);
});


// PUT /films/{id}
router.put("/films/:id", onlyAdmin, async (req, res)=> {
  const film = await Film.updateOne({_id: req.params.id}, req.body);
  res.json(film);
});


// DELETE /films/{id}
router.delete("/films/:id", onlyAdmin, async (req, res)=> {
  const film = await Film.deleteOne({_id: req.params.id}, req.body);
  res.json(film);
});


/*
* review
*/


// POST /films/{id}/review
router.post("/films/:id/review", redirectToLogin, async (req, res)=> {
  const review = new Review({
    ...req.body,
    user: req.session.userId,
    film: req.params.id
  });
  res.json(review);
});


// GET /films/{id}/review
router.get("/films/:id/review", async (req, res)=> {
  if (req.session.role === "admin") {
    const reviews = await Review.find({film: req.params.id});
    return res.json(reviews);
  }
  const reviews = await Review.find({film: req.params.id, isApproved: true});
  res.json(reviews);
});


// GET /film/{id}/review/{id}
router.get("/films/:id/review/:reviewId", (req, res)=> {
  
  res.json({
    "id": "uuid",
    "film": "ссылка на ID film",
    "user": "ссылка на ID user",
    "message": "string",
    "createdAt": "datetime",
    "isApproved": "boolean",
    "deletedAt": null
  });
});


// PUT /film/{id}/review/{id}
router.put("/films/:id/review/:reviewId", redirectToLogin, async (req, res)=> {
  if (req.session.role !== "admin") {
    const review = await Review.updateOne({_id:req.params.reviewId}, {...req.body, isApproved: false});
    return res.json(review);
  }
  const review = await Review.updateOne({_id:req.params.reviewId}, {isApproved: req.body.isApproved});
  return res.json(review);
});


// DELETE /film/{id}/review/{id}
router.delete("/films/:id/review/:reviewId", redirectToLogin, async (req, res)=> {
  const review = await Review.findOne({_id:req.params.reviewId});
  if (req.session.userId === review.user || req.session.role === "admin") {
    const review = await Review.deleteOne({_id:req.params.reviewId});
    return res.json(review);
  }
});


/*
* rating
*/


// POST /film/{id}/rating
router.post("/films/:id/rating", async (req, res)=> {
  res.status(201).json(
    {
      "id": "uuid",
      "film": "ссылка на ID film",
      "user": "ссылка на ID user",
      "ball": "integer",
      "createdAt": "datetime"
    });
});


// GET /films/rating
router.get("/films/rating", async (req, res)=> {
  res.json([{
    "id": "uuid",
    "film": "ссылка на ID film",
    "user": "ссылка на ID user",
    "ball": "integer",
    "createdAt": "datetime"
  },
  "..."]);
});


// GET /films/{id}/rating
router.get("/films/:id/rating", async (req, res)=> {
  res.json([
    {
      "id": "uuid",
      "film": "ссылка на ID film",
      "user": "ссылка на ID user",
      "ball": "integer",
      "createdAt": "datetime"
    },
    "..."]);
});


// GET /films/{id}/rating/{id}
router.get("/films/:id/rating/:ratingId", async (req, res)=> {
  res.json(
    {
      "id": "uuid",
      "film": "ссылка на ID film",
      "user": "ссылка на ID user",
      "ball": "integer",
      "createdAt": "datetime"
    });
});


// PUT /films/{id}/rating/{id}
router.put("/films/:id/rating/:ratingId", async (req, res)=> {
  res.json(
    {
      "id": "uuid",
      "film": "ссылка на ID film",
      "user": "ссылка на ID user",
      "ball": "integer",
      "createdAt": "datetime"
    });
});


// DELETE /films/{id}/rating/{id}
router.delete("/films/:id/rating/:ratingId", async (req, res)=> {
  res.send(`Ratig ${req.params.ratingId} will be deleted`);
});

export = router;