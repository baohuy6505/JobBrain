import CandidateColumn from "../../../Components/manager/dashboard/CandidateColumn";
import CandidateStats from "../../../Components/manager/dashboard/CandidateStats";

export default function CandidatesBoardPage() {
  const columns = [
    {
    title: "New Applicants",
    count: 12,
    candidates: [
      {
        name: "Trương Tấn Quang Vũ",
        role: "Full Stack Developer",
        tags: ["Quảng Nam", "React", "NodeJS"],
        match: "95% Match",
        time: "2h ago",
      },
      {
        name: "Nguyễn Vinh Hà",
        role: "Frontend Developer",
        tags: ["Đà Nẵng", "VueJS", "Tailwind"],
        match: "92% Match",
        time: "5h ago",
      },
    ],
  },
  {
    title: "Screened",
    count: 8,
    candidates: [
      {
        name: "Nguyễn Anh Nhật Huy",
        role: "Backend Developer",
        tags: ["Huế", "Java", "Spring Boot"],
        match: "88% Match",
        time: "Yesterday",
      },
    ],
  },
  {
    title: "Interview",
    count: 3,
    candidates: [
      {
        name: "Phan Xuân Trung",
        role: "Full Stack Developer",
        tags: ["Today, 2:30 PM", "Quảng Nam"],
        match: "94% Match",
        time: "1d ago",
      },
      {
        name: "Nguyễn Bảo Huy",
        role: "Backend Developer",
        tags: ["Tomorrow, 9:00 AM", "Quảng Nam"],
        match: "90% Match",
        time: "2d ago",
      },
    ],
  },
  {
    title: "Offered",
    count: 1,
    candidates: [
      {
        name: "Nguyễn Khả Dương",
        role: "AI Engineer",
        tags: ["Offer Sent - Pending", "Quảng Ngãi"],
        match: "99% Match",
        time: "1w ago",
      },
    ],
  },
];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        {columns.map((column) => (
          <CandidateColumn
            key={column.title}
            title={column.title}
            count={column.count}
            candidates={column.candidates}
          />
        ))}
      </div>

      <CandidateStats />
    </div>
  );
}