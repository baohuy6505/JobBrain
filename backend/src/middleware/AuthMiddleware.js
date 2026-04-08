const jwt = require("jsonwebtoken");

const authMiddleware = {
  // Kiểm tra xem user đã đăng nhập chưa (Có token hợp lệ không)
  verifyToken: (req, res, next) => {
    // Client thường gửi token dạng: "Bearer [token]"
    const token = req.headers.authorization;
    
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_SECRET || "chuoi_bi_mat_cua_jobbrain", (err, user) => {
        if (err) {
          return res.status(403).json({ success: false, message: "Token không hợp lệ hoặc đã hết hạn!" });
        }
        req.user = user; // Lưu thông tin user (gồm id và role) vào request để dùng cho các hàm sau
        next();
      });
    } else {
      return res.status(401).json({ success: false, message: "Bạn chưa đăng nhập!" });
    }
  },

  // Kiểm tra quyền hạn (Role)
  verifyRole: (allowedRoles) => {
    return (req, res, next) => {
      authMiddleware.verifyToken(req, res, () => {
        if (allowedRoles.includes(req.user.role)) {
          next(); // Nếu role hợp lệ, cho phép đi tiếp
        } else {
          res.status(403).json({ 
            success: false, 
            message: "Bạn không có quyền truy cập chức năng này!" 
          });
        }
      });
    };
  },
};

module.exports = authMiddleware;