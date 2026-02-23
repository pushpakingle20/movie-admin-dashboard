import { Moon, Sun } from "lucide-react";

export default function Topbar({ dark, setDark }) {
  return (
    <div className="h-16 w-full bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Admin Dashboard</h1>

      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
