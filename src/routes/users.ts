import { Router } from "express";

const router: Router = Router();

// POST /users/login
router.post("/users/login", (req, res)=> {
  res.json({
    "fio": "someText", 
    "role": "someText", 
    "email": "someText",
    "token": "AUTHORIZATION_TOKEN"
  });
})

// GET /users
router.get("/users", (req, res)=> {
  res.json([
    { 
    "id": 1,
    "fio": "John Doe",
    "birthday": "1998-10-12",
    "gender": "male",
    "email": "john.doe@gmail.com",
    "password": "mynameis John",
    "role": "user",
    "createdAt": "2021-01-10",
    "deletedAt": null 
  },
  "..."]);
})

// POST /users
router.post("/users", (req, res)=> {
  res.status(201).json(req.body.user);
})

// GET /users/{id}
router.get("/users/:id", (req, res)=> {
  res.status(200).json({ 
    "id": 1,
    "fio": "John Doe",
    "birthday": "1998-10-12",
    "gender": "male",
    "email": "john.doe@gmail.com",
    "password": "mynameis John",
    "role": "user",
    "createdAt": "2021-01-10",
    "deletedAt": null 
  });
})

// PUT /users/{id}
router.put("/users/:id", (req, res)=> {
  res.status(200).json({ 
    "id": 1,
    "fio": "John Doe",
    "birthday": "1998-10-12",
    "gender": "male",
    "email": "john.doe@gmail.com",
    "password": "mynameis John",
    "role": "user",
    "createdAt": "2021-01-10",
    "deletedAt": null 
  });
})


// DELETE /users/{id}
router.delete("/users/:id", (req, res)=> {
  res.send(`User ${req.params.id} will be deleted`);
})




export = router;