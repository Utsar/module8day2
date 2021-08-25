import atob from "atob";
import AuthorModel from "../services/authors/schema.js";

export const basicAuthMiddleware = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new Error(401, "No Authorization header provided!");
  } else {
    const credentialsDecoded = atob(req.headers.authorization.split(" ")[1]);

    const [email, password] = credentialsDecoded.split(":");

    const author = await AuthorModel.checkCredentials(email, password);

    if (author) {
      req.author = author;
      next();
    } else {
      throw new Error(401, "Invalid Credentials!");
    }
  }
};
