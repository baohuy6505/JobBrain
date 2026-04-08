import React from "react";
import { HiStar } from "react-icons/hi";

const CompanyReviews = ({ reviews, rating, reviewsCount, stats }) => {
  const renderStars = (score) =>
    [...Array(5)].map((_, i) => (
      <HiStar
        key={i}
        className={i < score ? "text-yellow-400" : "text-gray-200"}
      />
    ));

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="w-2 h-8 bg-yellow-400 rounded-full"></span> Phản hồi
        </h3>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl text-sm font-bold active:scale-95">
          Viết đánh giá
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 pb-10 border-b border-slate-50 mb-10">
        <div className="text-center px-8 border-r-0 md:border-r border-slate-100">
          <p className="text-8xl font-black text-slate-800 leading-none">
            {rating}
          </p>
          <div className="text-yellow-400 text-2xl my-3 flex justify-center">
            {renderStars(Math.round(rating))}
          </div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            {reviewsCount} Đánh giá
          </p>
        </div>
        <div className="flex-grow w-full space-y-3">
          {stats?.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[#6344ff] w-14">
                <span className="text-xs font-bold">{item.star}</span>
                <HiStar className="text-xs" />
              </div>
              <div className="flex-grow h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="bg-yellow-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {reviews?.map((review) => (
          <div key={review.id}>
            <div className="flex justify-between mb-4">
              <div className="flex gap-4 text-left">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center font-bold text-[#6344ff] text-xl">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{review.author}</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">
                    {review.status}
                  </p>
                </div>
              </div>
              <div className="flex text-lg text-yellow-400">
                {renderStars(review.rating)}
              </div>
            </div>
            <h5 className="font-bold text-slate-800 text-lg mb-3 text-left">
              "{review.title}"
            </h5>
            <div className="bg-slate-50 p-5 rounded-3xl text-left text-sm text-slate-600 leading-relaxed">
              {review.pros}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyReviews;
