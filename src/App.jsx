import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import Analytics from "./pages/Analytics";
import Movies from "./pages/Movies";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex w-screen h-screen overflow-hidden">

        {/* Sidebar */}
        <Sidebar active={active} setActive={setActive} />

        {/* Main Section */}
        <div className="flex flex-col flex-1 w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">

          <Topbar dark={dark} setDark={setDark} />

          <div className="flex-1 p-6 overflow-auto w-full">
            {active === "dashboard" && <Dashboard />}
            {active === "calendar" && <CalendarPage />}
            {active === "analytics" && <Analytics />}
            {active === "movies" && <Movies />}
          </div>

        </div>
      </div>
    </div>
  );
}
