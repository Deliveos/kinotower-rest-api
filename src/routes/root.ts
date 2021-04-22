import { Router } from "express";
import { redirectToLogin } from "../middleware/redirect";

const router: Router = Router();

// // POST /
// router.post("/", (req,res)=> {
//   res.status(201).json({
//     "id": "uuid",
//     "name": "string"
//   });
// });

// GET /
router.get("/", redirectToLogin,(req,res)=> {
  console.log(req.session);
  const { userId } = req.session;
  res.send(`
      <h1>Welcome</h1>
      ${userId ? `
      <form method="POST" action="/api/users/logout">
        <button>Logout</button>
      </form>
      `:`
      <a href="/api/users/login">Login</a>
      <a href="/api/users/register">Register</a>
      `}
  `);
});
export = router;