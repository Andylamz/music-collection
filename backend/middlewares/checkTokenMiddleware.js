import jwt from "jsonwebtoken";

function checkTokenMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ code: "1111", msg: "No token", data: null });
  }
  const token = authHeader.split(" ")[1];
  try {
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = data;
    // console.log(data);
    next();
  } catch (err) {
    return res
      .status(400)
      .json({ code: "1111", msg: "Invalid Token", data: null });
  }
}
export default checkTokenMiddleware;
