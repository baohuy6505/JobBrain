import React from "react";

const JobDetailBody = ({ job }) => {
  const sections = [
    {
      title: "Mô tả công việc",
      content: [
        "Phát triển các tính năng mới cho nền tảng sử dụng ReactJS và Tailwind CSS.",
        "Tối ưu hóa hiệu suất website và trải nghiệm người dùng trên thiết bị di động.",
        "Phối hợp chặt chẽ với team Design để chuyển đổi UI/UX sang code thực tế.",
        "Viết code sạch, dễ bảo trì và thực hiện code review hàng ngày.",
      ],
    },
    {
      title: "Yêu cầu ứng viên",
      content: [
        "Có ít nhất 2 năm kinh nghiệm làm việc với ReactJS.",
        "Thành thạo Tailwind CSS, HTML5, CSS3 và Javascript (ES6+).",
        "Hiểu biết về Redux Toolkit hoặc các thư viện quản lý State.",
        "Có tư duy tốt về UI/UX và khả năng giải quyết vấn đề.",
      ],
    },
    {
      title: "Quyền lợi",
      content: [
        "Mức lương cạnh tranh và thưởng tháng 13 hấp dẫn.",
        "Bảo hiểm sức khỏe cao cấp và kiểm tra sức khỏe định kỳ.",
        "Môi trường làm việc trẻ trung, năng động, nhiều cơ hội thăng tiến.",
        "Hỗ trợ máy tính làm việc (Macbook/Dell XPS) và đồ ăn nhẹ tại văn phòng.",
      ],
    },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-2">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetailBody;
