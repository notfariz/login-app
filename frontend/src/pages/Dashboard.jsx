// src/pages/Dashboard.jsx
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-400 mb-8">You are now logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;