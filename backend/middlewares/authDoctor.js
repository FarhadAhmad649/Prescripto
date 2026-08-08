import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = (req, res, next) => {
  try {
    let dToken =
      req.headers.dtoken ||
      req.headers["dtoken"] ||
      req.headers.authorization ||
      req.headers.Authorization;
    console.log("dToken: " + dToken);
    if (!dToken) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, login again",
      });
    }

    if (typeof dToken === "string" && dToken.startsWith("Bearer ")) {
      dToken = dToken.split(" ")[1];
    }

    const token_decode = jwt.verify(dToken.trim(), process.env.JWT_SECRET);

    req.docId = token_decode.id;

    next();
  } catch (error) {
    console.log("authDoctor error:", error);
    return res.status(401).json({
      success: false,
      message: "Not authorized, login again",
    });
  }
};

export default authDoctor;
