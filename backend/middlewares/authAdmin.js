import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = (req, res, next) => {
  try {
    const aToken =
      req.headers.atoken || req.headers["atoken"] || req.headers.atoken;
    if (!aToken) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, login again" });
    }

    const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, login again" });
    }

    // authorized
    return next();
  } catch (error) {
    console.log("authAdmin error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, login again" });
  }
};

export default authAdmin