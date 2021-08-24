import express from "express";
import usersSchema from "./usersSchema.js";

const usersRouter = express.Router();

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new usersSchema(req.body);
    const { _id } = await newUser.save();
    res.status(201).send({ _id });
  } catch (error) {
    next(error);
  }
});
usersRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
usersRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
usersRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
usersRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
