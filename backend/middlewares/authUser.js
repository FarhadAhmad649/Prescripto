import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized, login again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = token_decode.id;

    // authorized
    next();
  } catch (error) {
    console.log("authUser error:", error);
    return res.json({ success: false, message: "Not authorized, login again" });
  }
};

export default authUser;
