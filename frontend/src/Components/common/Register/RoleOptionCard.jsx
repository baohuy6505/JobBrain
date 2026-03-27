// Đây là component "cái khuôn"
const RoleOptionCard = ({ icon, title, description, isActive, onClick }) => {
  // Định nghĩa các class CSS dựa trên trạng thái isActive
  const cardClasses = `
    register-role-selector__item 
    flex flex-col items-start gap-1 
    border-2 rounded-xl px-4 py-4 
    transition cursor-pointer text-left w-full
    ${
      isActive
        ? "register-role-selector__item--active border-indigo-500 bg-indigo-50"
        : "border-gray-200 hover:border-indigo-300 bg-white"
    }
  `;

  const iconClasses = `
    register-role-selector__icon text-xl 
    ${isActive ? "text-indigo-600" : "text-gray-500"}
  `;

  const titleClasses = `
    register-role-selector__label 
    font-semibold text-sm 
    ${isActive ? "text-indigo-700" : "text-gray-800"}
  `;

  return (
    <button type="button" onClick={onClick} className={cardClasses}>
      {/* Hiển thị Icon truyền vào */}
      <div className={iconClasses}>{icon}</div>

      {/* Hiển thị Tiêu đề truyền vào */}
      <span className={titleClasses}>{title}</span>

      {/* Hiển thị Mô tả truyền vào */}
      <span className="register-role-selector__desc text-xs text-gray-500 leading-snug">
        {description}
      </span>
    </button>
  );
};

export default RoleOptionCard;
