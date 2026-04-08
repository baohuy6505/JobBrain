import { FaUser, FaBuilding } from "react-icons/fa";
// Gọi cái khuôn từ thư mục common/Register ra
import RoleOptionCard from "./RoleOptionCard";

const RoleSelector = ({ role, setRole }) => {
  return (
    <div className="register-role-selector grid grid-cols-2 gap-3 mb-6">
      <RoleOptionCard
        icon={<FaUser />}
        title="Ứng viên"
        description="Tìm kiếm công việc mơ ước"
        isActive={role === "candidate"}
        onClick={() => setRole("candidate")}
      />

      <RoleOptionCard
        icon={<FaBuilding />}
        title="Nhà tuyển dụng"
        description="Đăng tin và tìm nhân tài"
        isActive={role === "employer"}
        onClick={() => setRole("employer")}
      />
    </div>
  );
};

export default RoleSelector;
