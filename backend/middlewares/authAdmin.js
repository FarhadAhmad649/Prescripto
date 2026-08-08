import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = (req, res, next) => {
  try {
    let aToken =
      req.headers.atoken ||
      req.headers["atoken"] ||
      req.headers.authorization ||
      req.headers.Authorization;

    if (!aToken) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, login again" });
    }

    if (typeof aToken === "string" && aToken.startsWith("Bearer ")) {
      aToken = aToken.split(" ")[1];
    }

    const token_decode = jwt.verify(aToken.trim(), process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, login again" });
    }

    return next();
  } catch (error) {
    console.log("authAdmin error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, login again" });
  }
};

export default authAdmin