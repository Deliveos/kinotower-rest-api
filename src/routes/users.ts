import { Router } from "express";
import path from "path";
import config from "../config";
import { redirectToHome, redirectToLogin } from "../middleware/redirect";
import { User } from "../models/User"

const router: Router = Router();

// POST /users/register
router.post("/users/register", redirectToHome, async (req, res)=> {
  const { name, birthday, gender, email, password } = req.body;
  const exists = await User.findOne({email});
    if (!exists) {
      console.log(exists);
      const user = new User({
        fio: name,
        birthday: birthday,
        gender: gender,
        email: email,
        //TODO: add password hash
        password: password
      }) 
        const newUser = await user.save();
        req.session.userId = newUser._id;
        return res.redirect("/"); 
      
      // const userId = await user.save;
    } else {
      res.redirect("/api/users/login");
    }
    res.redirect("/api/users/register");
});

// GET /users/register
router.get("/users/register", redirectToHome, (req, res)=> {
  res.sendFile(path.join((__dirname + '/../../pages/register.html')))
});

// POST /users/login
router.post("/users/login", redirectToHome, async (req, res)=> {
  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({email});
    if (user) {
      //FIXME: hash
      if (password === user.password) {
        req.session.userId = user._id;
        return res.redirect("/");
      }
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
    if (err) {
      throw new Error(err);
    }
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
});

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