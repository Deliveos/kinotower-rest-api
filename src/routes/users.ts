import { Router } from "express";
import path from "path";
import config from "../config";
import { redirectToHome, redirectToLogin } from "../middleware/redirect";

const router: Router = Router();

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "password"
  },
  {
    id: 2,
    name: "Max Paddincton",
    email: "maxpad@gmail.com",
    password: "welcome"
  }
]

// POST /users/register
router.post("/users/register", redirectToHome, (req, res)=> {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const exists = users.some(user => user.email === email);
    if (!exists) {
      const user = {
        id: users.length +1,
        name,
        email,
        password
      };
      users.push(user)
      req.session.userId = user.id;
      res.redirect("/");
    } else {
      res.redirect("/api/users/login");
    }
  }
  res.redirect("/api/users/register");
})

// GET /users/register
router.get("/users/register", redirectToHome, (req, res)=> {
  console.log(__dirname);
  res.sendFile(path.join((__dirname + '/../../pages/register.html')))
})

// POST /users/login
router.post("/users/login", redirectToHome, (req, res)=> {
  const { email, password } = req.body;
  if (email && password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      req.session.userId = user.id;
      res.redirect("/");
    }
  }
  res.redirect("/api/users/login");
})

// GET /users/login
router.get("/users/login", redirectToHome, (req, res)=> {
  console.log(__dirname);
  res.sendFile(path.join((__dirname + '/../../pages/login.html')))
})

// POST /users/logout
router.post("/users/logout", redirectToLogin, (req, res)=> {
  req.session.destroy(err => {
    return res.redirect("/");
  });
  res.clearCookie(config.SESSION_NAME);
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