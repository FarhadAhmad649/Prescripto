import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = (req, res, next) => {
  try {
    const dToken = req.headers.dtoken;
    console.log("dToken: " + dToken);
    if (!dToken) {
      return res.json({
        success: false,
        message: "Not authorized, login again",
      });
    }

    const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);

    req.docId = token_decode.id;

    // authorized
    next();
  } catch (error) {
    console.log("authDoctor error:", error);
    return res.json({ success: false, message: "Not authorized, login again" });
  }
};

export default authDoctor;
