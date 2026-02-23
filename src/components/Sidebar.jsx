import { LayoutDashboard, Calendar, BarChart3, Film } from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "calendar", label: "Calendar", icon: <Calendar size={18} /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
    { id: "movies", label: "Movies", icon: <Film size={18} /> },
  ];

  return (
    <div className="w-64 min-w-64 h-full bg-white dark:bg-gray-800 shadow-lg p-5">
      <h2 className="text-xl font-bold mb-6">Movie Admin</h2>

      {menu.map((item) => (
        <div
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex items-center gap-3 p-3 rounded cursor-pointer mb-2 transition ${
            active === item.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
}
