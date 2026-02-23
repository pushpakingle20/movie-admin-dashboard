import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const data = [
    { name: "Mon", tickets: 400 },
    { name: "Tue", tickets: 700 },
    { name: "Wed", tickets: 200 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Weekly Ticket Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tickets" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
