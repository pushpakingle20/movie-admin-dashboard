import { Users, Ticket, IndianRupee } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    { title: "Users", value: 1250, icon: <Users /> },
    { title: "Tickets", value: 3421, icon: <Ticket /> },
    { title: "Revenue", value: "₹8,45,000", icon: <IndianRupee /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <div
          key={i}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 dark:text-gray-300">
                {c.title}
              </h3>
              <p className="text-2xl font-bold mt-2">
                {c.value}
              </p>
            </div>
            {c.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
