import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("Hey there this is / route.");
});

export default router;
