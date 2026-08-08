import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = (req, res, next) => {
  try {
    let token =
      req.headers.token ||
      req.headers["x-access-token"] ||
      req.headers.authorization ||
      req.headers.Authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }

    if (typeof token === "string" && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const token_decode = jwt.verify(token.trim(), process.env.JWT_SECRET);

    req.userId = token_decode.id;

    next();
  } catch (error) {
    console.log("authUser error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized, login again",
    });
  }
};

export default authUser;
