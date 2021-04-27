import { Router } from "express";
import path from "path";
import config from "../config";
import { encryption } from "../middleware/encryption";
import { onlyAdmin } from "../middleware/isadmin";
import { redirectToHome, redirectToLogin } from "../middleware/redirect";
import { User } from "../models/User";

const router: Router = Router();

// POST /users/register
router.post("/users/register", redirectToHome, encryption, async (req, res)=> {
  const { fio, birthday, gender, email, password } = req.body;
  const exists = await User.findOne({email});
    if (!exists) {
      console.log(exists);
      const user = new User({
        fio,
        birthday,
        gender,
        email,
        password
      }); 
        const newUser = await user.save();
        req.session.userId = newUser._id;
        req.session.role = newUser.role;
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
router.post("/users/login", redirectToHome, encryption, async (req, res)=> {
  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({email});
    console.log(user);
    if (user) {
      if (password === user.password) {
        req.session.userId = user._id;
        req.session.role = user.role;
        return res.redirect("/");
      }
    }
  }
  res.redirect("/api/users/login");
});

// GET /users/login
router.get("/users/login", redirectToHome, (req, res)=> {
  console.log(__dirname);
  res.sendFile(path.join((__dirname + '/../../pages/login.html')))
});

// POST /users/logout
router.post("/users/logout", redirectToLogin, (req, res)=> {
  req.session.destroy(err => {
    if (err) {
      throw new Error(err);
    }
    return res.redirect("/");
  });
  res.clearCookie(config.SESSION_NAME);
});

// GET /users
router.get("/users", onlyAdmin, async (req, res)=> {
  const users = await User.find();
  if (users) {
    return res.json(users);
  }
  res.json({});
});

// GET /users/{id}
router.get("/users/:id", redirectToLogin, async (req, res)=> {
  if(req.session.role === "admin") {
    const user = await User.findOne({_id: req.params.id});
    return res.json(user);
  }
  if (req.session.userId === req.params.id) {
    const user = await User.findOne({_id: req.params.id});
    return res.json(user);
  }
  res.redirect("/");
})

// PUT /users/{id}
router.put("/users/:id", redirectToLogin, encryption, async (req, res)=> {
  console.log(req.body);
  if(req.session.role === "admin") {
    const user = await User.updateOne({_id: req.params.id}, req.body);
    return res.json(user);
  }
  if (req.session.userId === req.params.id) {
    const user = await User.updateOne({_id: req.params.id}, req.body);
    return res.json(user);
  }
  res.redirect("/");
})


// DELETE /users/{id}
router.delete("/users/:id", onlyAdmin, async (req, res)=> {
  const user = await User.deleteOne({_id: req.params.id}, req.body);
  return res.json(user);
})

export = router;