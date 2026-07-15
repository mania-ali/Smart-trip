//verfies jwt token, suppose a user logged in , jwt created, 
// now he is going to saved item, middleware verfies his jwt token 
//that it was stored and let it go there. no need to login again

import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  //starts with bearer, sent by react
  const authHeader = req.headers.authorization;
//if user not logged in/ jwt for him not created
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided." });
  }
//remove bearer and keep jwt
  const token = authHeader.split(" ")[1];

  //check was this user sign using our secret key?
//decoded gets user id and password with that token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}