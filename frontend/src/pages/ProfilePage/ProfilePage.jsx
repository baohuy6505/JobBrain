import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Đảm bảo đường dẫn này khớp với thư mục project của bạn
import { fetchConversations } from "../../features/Messages/messageSlice";
import {
  MessageCircle,
  UserPlus,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";

const ProfilePage = () => {
  const { id } = useParams(); // Lấy ID từ URL (ví dụ: /profile/2)
  const dispatch = useDispatch();

  // 1. Lấy dữ liệu từ Redux
  const { conversations, status } = useSelector((state) => state.messages);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  // 2. Nếu F5 trang mà Redux trống thì gọi API lấy lại dữ liệu
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchConversations());
    }
  }, [status, dispatch]);

  // 3. Màn hình chờ khi đang tải
  if (status === "loading" || status === "idle") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 4. TÌM KIẾM THÔNG MINH (SỬA LỖI Ở ĐÂY)
  // Chúng ta so sánh id trên URL với cả 'id' và 'userId' trong data cho chắc chắn
  const userProfile = conversations.find(
    (u) => u.id === Number(id) || u.userId === Number(id),
  );

  // 5. Nếu vẫn không tìm thấy thì báo lỗi
  if (!userProfile) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 font-light">
            Không tìm thấy người dùng với ID: {id}
          </p>
        </div>
      </div>
    );
  }

  // 6. Lấy dữ liệu bài viết và thống kê từ Object vừa tìm được
  const userStats = userProfile.stats || {
    followers: 0,
    following: 0,
    posts: 0,
  };
  const userPosts = userProfile.posts || [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${userProfile.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Profile Info Section */}
      <div className="relative px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-24 mb-8">
            <div className="relative z-10">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 pb-4">
              <h1 className="text-4xl font-light text-gray-900 mb-1">
                {userProfile.name}
              </h1>
              <p className="text-gray-500 text-lg font-light mb-4">
                @{userProfile.name.toLowerCase().replace(/\s+/g, "")}
              </p>

              <div className="flex gap-3 items-center">
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    isFollowing ? "bg-gray-200" : "bg-blue-500 text-white"
                  }`}
                >
                  <UserPlus size={18} />
                  {isFollowing ? "Đang theo dõi" : "Theo dõi"}
                </button>
                <button className="px-6 py-2 rounded-lg border border-gray-300 flex items-center gap-2">
                  <MessageCircle size={18} /> Nhắn tin
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 mb-8 border-b border-gray-200 pb-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{userStats.posts}</p>
              <p className="text-gray-500 text-sm">Bài viết</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {userStats.followers.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">Người theo dõi</p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="flex gap-8 mb-8 border-b border-gray-200">
            {["posts", "photos", "about"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium relative ${
                  activeTab === tab
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                {tab === "posts"
                  ? "Bài viết"
                  : tab === "photos"
                    ? "Ảnh"
                    : "Giới thiệu"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {activeTab === "posts" && (
            <div className="space-y-6">
              {userPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={userProfile.avatar}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{userProfile.name}</p>
                      <p className="text-xs text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">{post.content}</p>
                  <div className="flex gap-6 text-gray-500 text-sm border-t pt-4">
                    <button className="flex items-center gap-1">
                      <Heart size={16} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageSquare size={16} /> {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab About */}
          {activeTab === "about" && (
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold mb-4">Thông tin cơ bản</h3>
              <p>
                <strong>Chuyên môn:</strong> {userProfile.role}
              </p>
              <p>
                <strong>Công ty:</strong> {userProfile.currentRole}
              </p>
              <p>
                <strong>Học vấn:</strong> {userProfile.education}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default ProfilePage;
