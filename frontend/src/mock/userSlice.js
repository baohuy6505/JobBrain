import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Dữ liệu mặc định để Header và Dashboard lấy dùng chung
  userInfo: {
    name: "Vinh Hà",
    avatar: "https://i.pravatar.cc/150?u=vinhha",
    address: "Đà Nẵng, Việt Nam",
  },
  isAuthenticated: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice;
export default userSlice.reducer;
