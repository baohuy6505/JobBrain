import {
  HiOutlineGlobeAlt,
  HiOutlineMail,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import CopyBright from "../common/CopyBright1";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Job<span className="text-[#6344ff]">Brain</span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed">
              Mạng lưới tuyển dụng chuyên nghiệp hàng đầu Việt Nam, giúp kết nối
              nhân tài và doanh nghiệp một cách chính xác.
            </p>

            <div className="flex items-center space-x-4 text-gray-400">
              <a
                href="#"
                className="hover:text-[#6344ff] transition-colors text-xl"
              >
                <HiOutlineGlobeAlt />
              </a>
              <a
                href="#"
                className="hover:text-[#6344ff] transition-colors text-xl"
              >
                <HiOutlineMail />
              </a>
              <a
                href="#"
                className="hover:text-[#6344ff] transition-colors text-xl"
              >
                <HiOutlineChatAlt2 />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              {[
                "About",
                "Privacy Policy",
                "Terms of Service",
                "Help Center",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#6344ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Jobs by Category</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              {[
                "Information Technology",
                "Marketing & Sales",
                "Finance & Accounting",
                "Creative & Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#6344ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Nhận cập nhật về các cơ hội việc làm mới nhất.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#6344ff] transition-all text-sm bg-gray-50"
              />
              <button className="w-full py-3 bg-[#6344ff] hover:bg-[#5235d9] text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-100 active:scale-95">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <CopyBright company="JobBrain" />
      </div>
    </footer>
  );
};

export default Footer;
