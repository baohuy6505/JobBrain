import { useState } from "react";
import {
  HiSearch,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";

const SearchHero = () => {
  const locations = [
    { label: "Tất cả địa điểm", value: "all" },
    { label: "Đà Nẵng", value: "dn" },
    { label: "Hà Nội", value: "hn" },
    { label: "TP.HCM", value: "hcm" },
  ];

  // ✅ state
  const [keyword, setKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0].value);

  // ✅ handle search
  const handleSearch = () => {
    console.log("Keyword:", keyword);
    console.log("Location:", selectedLocation);

    // 👉 sau này gọi API ở đây
    // ví dụ:
    // getJobs({ keyword, location: selectedLocation })
  };

  return (
    <div className="w-full px-3">
      <div className="w-full bg-white p-1 md:p-2 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center gap-2 shadow-2xl max-w-4xl mx-auto mt-6 md:mt-10">
        {/* INPUT */}
        <div className="flex items-center flex-[1.5] px-3 md:px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 min-w-0">
          <HiOutlineBriefcase className="text-blue-600 text-xl md:text-2xl shrink-0" />

          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Vị trí ứng tuyển..."
            className="w-full p-3 md:p-4 text-gray-800 outline-none placeholder:text-gray-400 text-sm md:text-base bg-transparent min-w-0 flex-1"
          />
        </div>

        {/* DROPDOWN */}
        <Dropdown
          options={locations}
          value={selectedLocation}
          onChange={(value) => setSelectedLocation(value)}
          icon={<HiOutlineLocationMarker />}
        />

        {/* BUTTON */}
        <Button icon={<HiSearch />} onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default SearchHero;
