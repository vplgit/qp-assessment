import { messages } from "../common/messages";
import { statusCodes } from "../common/status_code";
export const validateToken = async (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // if (!token) {
  //   return res.status(401).json({ message: "Access token required" });
  // }
  try {
    //const decoded = await utils.jwtVerify(token);
    req.user = req.user !== undefined ? req.user : req.headers["user_role"];
    next();
  } catch (err) {
    res
      .status(statusCodes.unauthorized)
      .json({ message: messages.invalidToken });
  }
};
