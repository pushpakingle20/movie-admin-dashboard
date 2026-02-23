import { useState } from "react";

export default function Movies() {
  const [movies] = useState([
    { id: 1, name: "Avengers", price: 250 },
    { id: 2, name: "Jawan", price: 200 },
  ]);

  const [search, setSearch] = useState("");

  const filtered = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <input
        className="border p-2 mb-4 w-full rounded"
        placeholder="Search movie..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((m) => (
            <tr key={m.id} className="text-center border-t">
              <td className="p-2">{m.id}</td>
              <td className="p-2">{m.name}</td>
              <td className="p-2">₹{m.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
