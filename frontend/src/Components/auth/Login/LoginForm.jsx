const LoginForm = () => {
  return (
    <div>
      <form action="">
        <h2 className="form__title">ĐĂNG NHẬP</h2>
        <p className="form__desc">Chào mừng trở lại</p>
        <div className="form__email">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="form__password">
          <label htmlFor="">Mật khẩu</label>
          <input type="password" />
        </div>

        <div className="form__options">
          <label htmlFor="">
            <input type="checkbox" />
            Nhớ đăng nhập
          </label>

          <Link to="">Quên mật khẩu</Link>
        </div>

        <button type="submit" class="">
          Đăng nhập
        </button>
        <div class="divider">
          <span>hoặc</span>
        </div>

        <button type="button" class="btn-google">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google icon"
          />
          Tiếp tục với Google
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
