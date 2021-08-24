import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogsSchema = {
  title: {
    in: ["body"],
    isString: {
      errorMessage: "title validation failed , type must be string  ",
    },
  },
  category: {
    in: ["body"],
    isString: {
      errorMessage: "category validation failed , type must be  string ",
    },
  },
  content: {
    in: ["body"],
    isString: {
      errorMessage: "content validation failed , type must be string ",
    },
  },
  "author.name": {
    in: ["body"],
    isString: {
      errorMessage: "author.name validation failed , type must be string",
    },
  },
  "author.avatar": {
    in: ["body"],
    isString: {
      errorMessage: "author.avatar validation failed , type must be string",
    },
  },
  "readTime.value": {
    in: ["body"],
    isNumeric: {
      errorMessage: "readTime.value  validation failed , type must be numeric ",
    },
  },
  "readTime.unit": {
    in: ["body"],
    isString: {
      errorMessage: "readTime.unit  validation failed , type must be string ",
    },
  },
  cover: {
    in: ["body"],
    isString: {
      errorMessage: "cover validation failed , type must be string",
    },
  },
};

export default model("blogs", blogsSchema);
