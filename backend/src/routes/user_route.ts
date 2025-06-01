import express from "express";
import Users from "../models/User_model";
import { z } from "zod";
import { login_handler } from "../controller/login";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Hey there this is / route.");
});
router.post("/register", async (req, res) => {
  const parseDataCheck = z.object({
    firstNmae: z.string().max(20, "FirstName can't be more than 20 word."),

    lastName: z.string().max(20, "Lastname can't be more than 20 words."),
  });
  const data = {
    firstName: "prince",
    lastName: "kumar",
    email: "princeKumar2019@gmail.com",
    password: "12345",
  };

  try {
    const newUser = await Users.insertOne({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    await newUser.save();
    res.status(200).send("USer registed.");
  } catch (error) {
    res.status(400).send("Error registering user " + error);
  }
});

router.post("/login-user", login_handler);

export default router;
