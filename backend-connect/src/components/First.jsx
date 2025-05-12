import { useState } from "react";

const students = [
  { id: 1, name: "Alice Johnson", batchNo: "B2025A" },
  { id: 2, name: "Bob Smith", batchNo: "B2025B" },
  { id: 3, name: "Charlie Davis", batchNo: "B2025C" },
  { id: 4, name: "David White", batchNo: "B2025D" },
  { id: 5, name: "Emma Brown", batchNo: "B2025E" },
  { id: 6, name: "Frank Harris", batchNo: "B2025F" },
  { id: 7, name: "Grace Miller", batchNo: "B2025G" },
  { id: 8, name: "Henry Wilson", batchNo: "B2025H" },
  { id: 9, name: "Isla Thomas", batchNo: "B2025I" },
  { id: 10, name: "Jack Anderson", batchNo: "B2025J" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Student Filter</h1>
      <input
        type="text"
        placeholder="Search by ID, Name, or Batch No"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong> - {student.batchNo} (ID:{" "}
              {student.id})
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>

      <h1>FIRST APP</h1>
    </div>
  );
}
