export const adminOnly = (req, res, next) => {
  if (req.author.role === "Admin") {
    next();
  } else {
    throw new Error(403, "Admins only!");
  }
};
