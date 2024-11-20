import { messages } from "../common/messages";
import { statusCodes } from "../common/status_code";
export const requireRole = (role: string) => {
  return (req: any, res: any, next: any) => {
    const userRole = req.user;
    if (userRole !== role) {
      return res
        .status(statusCodes.forbidden)
        .json({ message: messages.accessDenied });
    }
    next();
  };
};
