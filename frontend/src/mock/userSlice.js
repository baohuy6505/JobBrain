  // import { createSlice } from "@reduxjs/toolkit";

  // const initialState = {
  //   // Dữ liệu mặc định để Header và Dashboard lấy dùng chung
  //   userInfo: {
  //     userId: 123,
  //     name: "Vinh Hà",
  //     phone: "0901234567",
  //     birthYear: "1998",
  //     age: 26,
  //     avatar: "https://i.pravatar.cc/150?u=vinhha",
  //     address: "Đà Nẵng, Việt Nam",
  //   },
  //   isAuthenticated: true,
  // };

  // const userSlice = createSlice({
  //   name: "user",
  //   initialState,
  //   reducers: {
  //     login: (state, action) => {
  //       state.userInfo = action.payload;
  //       state.isAuthenticated = true;
  //     },
  //     logout: (state) => {
  //       state.userInfo = null;
  //       state.isAuthenticated = false;
  //     },
  //   },
  // });

  // export const { login, logout } = userSlice;
  // export default userSlice.reducer;

  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ==========================================
// 1. GIẢ LẬP API ĐĂNG NHẬP (MOCK API)
// ==========================================
// Hàm này mô phỏng việc gửi email/mật khẩu lên Server và chờ Backend trả về dữ liệu.
export const loginUserAPI = createAsyncThunk(
  "user/loginUserAPI",
  async (credentials, thunkAPI) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Đây chính là cục JSON to đùng mà Backend sẽ trả về khi đăng nhập thành công
        resolve({
          userId: "U_1001",
          name: "Vinh Hà",
          phone: "0901234567",
          birthYear: "1998",
          age: 26,
          avatar: "https://i.pravatar.cc/150?u=vinhha",
          address: "Đà Nẵng, Việt Nam",
          role: "EMPLOYER", // Xác định quyền là Nhà tuyển dụng
          
          // Thông tin Công ty được nhúng vào bên trong User
          company: {
            companyId: "C_999",
            companyName: "Quang Vũ Design",
            position: "Admin",
            
            // Thông tin Ví (Wallet) được nhúng vào bên trong Công ty
            wallet: {
              accountInfo: {
                balance: "25.000.000",
                currency: "VND",
                companyName: "Quang Vũ Design",
                cardNumber: "**** **** 8888",
              },
              transactions: [
                { id: 1, date: "Oct 24, 2026", desc: "Nạp tiền - Chuyển khoản", type: "DEPOSIT", amount: "+2,500,000", status: "Success" },
                { id: 2, date: "Oct 22, 2026", desc: "Đăng tin: Senior Product Designer", type: "JOB POST", amount: "-299,000", status: "Success" },
                { id: 3, date: "Oct 20, 2026", desc: "Hoàn tiền ứng viên - Ref #9021", type: "REFUND", amount: "+45,000", status: "Success" },
                { id: 4, date: "Oct 18, 2026", desc: "Đăng tin: Backend Engineer", type: "JOB POST", amount: "-350,000", status: "Pending" },
                { id: 5, date: "Oct 15, 2026", desc: "Gia hạn gói Enterprise", type: "SUBSCRIPTION", amount: "-1,200,000", status: "Failed" },
              ],
            },
          },
        });
      }, 1000); // Giả lập mạng load mất 1 giây
    });
  }
);

// ==========================================
// 2. KHỞI TẠO STATE
// ==========================================
const initialState = {
  // ĐỂ DEV UI NHANH: Mình nhét sẵn cục dữ liệu giả vào đây để bạn không cần phải ra trang Đăng nhập bấm login mỗi lần F5 web.
  // Khi nào làm chức năng Đăng nhập/Đăng xuất thật, bạn đổi 'userInfo' thành null và 'isAuthenticated' thành false nhé.
  userInfo: {
    userId: "U_1001",
    name: "Vinh Hà",
    phone: "0901234567",
    birthYear: "1998",
    age: 26,
    avatar: "https://i.pravatar.cc/150?u=vinhha",
    address: "Đà Nẵng, Việt Nam",
    company: {
      companyId: "C_999",
      companyName: "Quang Vũ Design",
      wallet: {
        accountInfo: {
          balance: "25.000.000",
          currency: "VND",
          companyName: "Quang Vũ Design",
          cardNumber: "**** **** 8888",
        },
        transactions: [
          { id: 1, date: "Oct 24, 2026", desc: "Nạp tiền - Chuyển khoản", type: "DEPOSIT", amount: "+2,500,000", status: "Success" },
          { id: 2, date: "Oct 22, 2026", desc: "Đăng tin: Senior Product Designer", type: "JOB POST", amount: "-299,000", status: "Success" },
          { id: 3, date: "Oct 20, 2026", desc: "Hoàn tiền ứng viên - Ref #9021", type: "REFUND", amount: "+45,000", status: "Success" },
          { id: 4, date: "Oct 18, 2026", desc: "Đăng tin: Backend Engineer", type: "JOB POST", amount: "-350,000", status: "Pending" },
          { id: 5, date: "Oct 15, 2026", desc: "Gia hạn gói Enterprise", type: "SUBSCRIPTION", amount: "-1,200,000", status: "Failed" },
        ],
      },
    },
  },
  isAuthenticated: true,
  isLoading: false, // Thêm state loading để quay vòng vòng lúc đăng nhập
  error: null,
};

// ==========================================
// 3. TẠO SLICE (Quản lý các hành động)
// ==========================================
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      // Thực tế ở đây bạn sẽ thêm lệnh: localStorage.removeItem('token')
    },
    // Hành động update lại thông tin Profile mà hôm trước chúng ta làm
    updateUser: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    }
  },
  
  // extraReducers dùng để hứng kết quả từ cái API giả lập ở trên (loginUserAPI)
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAPI.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload; // Gắn cục data to đùng vào state
      })
      .addCase(loginUserAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Đăng nhập thất bại. Vui lòng thử lại!";
      });
  },
});

export const { logout, updateUser } = userSlice.actions; // Đừng quên .actions
export default userSlice.reducer;