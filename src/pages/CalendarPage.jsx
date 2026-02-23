import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const events = [
    {
      title: "Avengers Show",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
