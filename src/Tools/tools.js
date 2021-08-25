import jwt from "jsonwebtoken";

export const JWTAuthenticate = async (user) => {
  // 1. given the user ==> generate the tokens with user._id as payload
  const accessToken = await generateJWT({ _id: user._id });
  await user.save();
  return { accessToken };
};

const generateJWT = (payload) =>
  new Promise((resolve, reject) =>
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    )
  );

export const verifyJWT = (token) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) reject(err);
      resolve(decodedToken);
    })
  );
