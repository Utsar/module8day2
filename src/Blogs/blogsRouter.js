import express from "express";

const blogsRouter = express.Router();

blogsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
blogsRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
blogsRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
blogsRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
blogsRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default blogsRouter;
