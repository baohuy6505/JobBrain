import React, { useEffect, useState } from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([]); // Khởi tạo mảng rỗng

  useEffect(() => {
    // Gọi API từ Backend NodeJS
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Lỗi kết nối Backend:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobs.length > 0 ? (
        jobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-primary">
            <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
            <p className="text-slate-500 my-2">{job.company}</p>
            <div className="text-green-600 font-bold">{job.salary}</div>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-slate-400">Đang tải dữ liệu từ Server...</p>
      )}
    </div>
  );
};

export default Home;