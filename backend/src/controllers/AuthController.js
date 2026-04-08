const User = require("../models/UserModel"); // Đổi đường dẫn cho đúng với file của bạn
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  // 1. ĐĂNG KÝ (REGISTER)
  register: async (req, res) => {
    try {
      const { fullName, email, password, role } = req.body;

      if (!fullName || !email || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Vui lòng nhập đầy đủ họ tên, email và mật khẩu!" 
        });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ 
          success: false, 
          message: "Email này đã được sử dụng!" 
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const validRoles = ["candidate", "manager"];
      const finalRole = validRoles.includes(role) ? role : "candidate";

      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
        role: finalRole,
      });

      const savedUser = await newUser.save();

      // 6. Loại bỏ password trước khi trả về
      // Dùng .toObject() để convert document Mongoose sang object JS thuần
      const userResponse = savedUser.toObject();
      delete userResponse.password;

      res.status(201).json({
        success: true,
        message: `Đăng ký tài khoản ${finalRole} thành công!`,
        data: userResponse,
      });

    } catch (error) {
      console.error("Lỗi Register:", error);
      res.status(500).json({ 
        success: false, 
        message: "Lỗi hệ thống: " + error.message 
      });
    }
  },

  // 2. ĐĂNG NHẬP (LOGIN)
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: "Email không tồn tại!" });
      }

      // Kiểm tra mật khẩu
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ success: false, message: "Mật khẩu không chính xác!" });
      }

      const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET || "chuoi_bi_mat_cua_jobbrain",
        { expiresIn: "7d" } 
      );

      // Ẩn password trước khi trả về
      const { password: userPassword, ...userInfo } = user._doc;

      res.status(200).json({
        success: true,
        message: "Đăng nhập thành công!",
        accessToken,
        data: userInfo,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // 3. ĐĂNG XUẤT (LOGOUT)
  logout: async (req, res) => {
    try {
      // Đối với JWT thuần, việc logout thường được xử lý ở Frontend bằng cách xóa token.
      // Nếu bạn dùng cookie để lưu token, bạn clear nó ở đây:
      res.clearCookie("token"); 
      
      res.status(200).json({ success: true, message: "Đã đăng xuất thành công!" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = AuthController;